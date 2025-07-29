import 'react-phone-input-2/lib/material.css';
import PhoneInput from 'react-phone-input-2';
import { removeDashAndSpace } from '../../utils';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface PhoneNumberProps {
  value: string;
  name: string;
  onChange?: (value: string) => void;
  countryCode?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  label?: string;
  formik?: any;
  authScreens?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  showErrorMessage?: boolean;
}

const PrimaryPhoneInput = ({
  value,
  name,
  onChange,
  countryCode,
  variant,
  label,
  formik,
  authScreens = false,
  disabled = false,
  readOnly = false,
  showErrorMessage = false,
}: PhoneNumberProps) => {
  const [defaultCountry, setDefaultCountry] = useState<string>('pk');
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    if (!authScreens) return;

    const fetchCountry = async () => {
      setLoader(true);
      try {
        const response = await axios.get(
          'https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce'
        );

        const code = response?.data?.country_code?.toLowerCase();
        setDefaultCountry(code && code !== 'not found' ? code : 'pk');
      } catch (err) {
        console.warn('Error fetching country:', err);
        setDefaultCountry('pk');
      } finally {
        setLoader(false);
      }
    };

    fetchCountry();
  }, [authScreens]);

  return (
    <div style={{ width: '100%' }}>
      {label && <label style={{ fontSize: '14px', fontWeight: 500 }}>{label}</label>}
      <PhoneInput
        country={countryCode?.toLowerCase() || defaultCountry}
        value={value}
        onChange={(phone) => {
          onChange
            ? onChange(phone)
            : formik?.setFieldValue(name, removeDashAndSpace(phone));
        }}
        inputStyle={{
          width: '100%',
          height: '50px',
          background: '#fff',
          borderRadius: '4px',
          border:
            formik?.touched?.[name] && formik?.errors?.[name]
              ? '1px solid red'
              : '1px solid #ccc',
        }}
        inputProps={{
          name,
          readOnly,
          onBlur: formik?.handleBlur,
          disabled: disabled || loader,
          style: {
            cursor: readOnly ? 'not-allowed' : 'text',
          },
        }}
      />
      {!showErrorMessage &&
        formik?.touched?.[name] &&
        formik?.errors?.[name] && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
            {formik.errors[name]}
          </div>
        )}
    </div>
  );
};

export default PrimaryPhoneInput;

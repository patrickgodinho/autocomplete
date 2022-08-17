import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './input.styles.css';

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input(props: InputProps) {
  return <input {...props} />;
}

export default Input;

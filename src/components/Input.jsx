import React from 'react';

function Input({ value, onChange, placeholder }) {
  return (
    <input
      className="border border-gray-400 px-4 py-2 w-72 rounded-md"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;

import React from 'react';

function Button({ onClick, label }) {
  return (
    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>{label}</button>
  );
}

export default Button;

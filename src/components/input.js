import React from "react";

export default function Input({ label, ...props }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} {...props} />
    </div>
  );
}

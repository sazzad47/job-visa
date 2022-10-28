import React from "react";

const TextArea = ({label, type, name, value, onChange, required}) => {
  console.log('required', required)
  return (
    <div className="input_box textarea">
      {required ? (
        <input type={type} name={name} value={value} onChange={onChange} required />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
      <span className="text">{label}</span>
      <span className="line"></span>
    </div>
  );
};

export default TextArea;
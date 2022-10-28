import React from 'react'

const Select = ({children, type, name, value, onChange, required}) => {
  return (
    <div className="input_box">
      
      {required ? (
        <select type={type} name={name} value={value} onChange={onChange} required > 
        {children} </select>
      ) : (
        <select type={type} name={name} value={value} onChange={onChange} >
        {children} </select>
      )}
      
      <span className="line"></span>
    </div>
  )
}

export default Select
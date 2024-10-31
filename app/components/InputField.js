import React from 'react'

const InputField = ({label, name, value, onChange, placeholder}) => {
  return (
    <div>
        <label className = "block font-semibold mb-1">{label}</label>
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border border-gray-300 p-2 rounded"
        />
    </div>
  )
}

export default InputField
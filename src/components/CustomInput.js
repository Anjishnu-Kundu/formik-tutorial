import React from 'react'

const CustomInput = ({label, ...props}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  )
}

export default CustomInput

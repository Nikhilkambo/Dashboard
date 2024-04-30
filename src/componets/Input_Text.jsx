import React from 'react'

export default function Input_Text(props) {
  return (
    <input
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    className="form-control mt-1"
  />
  )
}

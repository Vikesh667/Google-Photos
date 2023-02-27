import React from 'react'
import style from './Input.module.css'
const Input = ({
  placeholder,
  onChange,
  onKeyDown,
  value
}) => {
  return (
    <div className={style.input}>
     <input 
       onChange={onChange}
       value={value}
     />
    
  
    </div>
  )
}

export default Input
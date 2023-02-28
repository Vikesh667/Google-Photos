import React from "react";
import style from "./Input.module.css";
const Input = ({ seacrh, handleSearchInput }) => {
  return (
    <div className={style.input}>
      <input value={seacrh} onChange={handleSearchInput} />
    </div>
  );
};

export default Input;

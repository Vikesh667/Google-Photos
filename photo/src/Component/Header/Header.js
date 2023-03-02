import React from "react";
import style from "./Header.module.css";
import { CiImport } from "react-icons/ci";
import Import from "../../Atom/Import";
import { AiOutlineQuestionCircle, AiOutlineSetting } from "react-icons/ai";
import { GrApps } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import SearchInput from "../../Atom/Input/Input";
import Drawer from "../../Atom/Drawer";
export const Header = () => {
  return (
    <nav className={style.Header}>
         <div className={style.Drawer}>
          <Drawer  />
          <Import />
         </div>
       
      <div className={style.logo}>
        <h1>Photo Gallery</h1>

      </div>
      
      <div className={style.input}>
        <input />
      </div>
      <div className={style.import}>
        <ul>
          <li>
            <Import />
          </li>
          <li>
            <AiOutlineQuestionCircle />
          </li>
          <li>
            <AiOutlineSetting />
          </li>
          <li>
            <GrApps />
          </li>
          <li>
            <CgProfile />
          </li>
        </ul>
      </div>
     
    </nav>
  );
};

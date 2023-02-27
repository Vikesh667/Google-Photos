
import  Input  from '../../Atom/Input/Input'
import React from 'react'
import style from './Header.module.css'
import {CiImport} from 'react-icons/ci'
import Import from '../../Atom/Import'
import {AiOutlineQuestionCircle,AiOutlineSetting} from 'react-icons/ai'
import {GrApps} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'
import { useState } from 'react'
export const Header = () => {
    const[search,setSeacrh]=useState("")
    const handleChange=(e)=>{
        setSeacrh(e.target.value)
        console.log(e.target.value)
    }
  return (
    <nav className={style.Header}>
       
        <div className={style.logo}>
        <h1>Google Photos</h1>
        </div>
        <div className={style.input}>
         <Input />
        </div>
         <div className={style.import}>
            <ul>
                <li>
                    <Import/>
                </li>
                <li>
                <AiOutlineQuestionCircle/>
                </li>
                <li>
                <AiOutlineSetting/>
                </li>
                <li>
                    <GrApps/>
                </li>
                <li>
                <CgProfile/> 
                </li>
            </ul>
        </div>
    
        </nav>
  )
}

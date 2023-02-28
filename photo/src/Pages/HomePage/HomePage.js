import React from 'react'
import { Header } from '../../Component/Header/Header'
import { SideBar } from '../../Component/LeftSection/SideBar'
import { RightSection } from '../../Component/Rigth/RightSection'
import style from './HomePage.module.css'
const HomePage = () => {
  return (
    <div className={style.HomePage}>
        
        <Header/>
        <div className={style.container}>
        <div className={style.SideBar}>
        <SideBar/>
        </div>
        <RightSection/>
       </div>
           
        
    </div>
  )
}

export default HomePage
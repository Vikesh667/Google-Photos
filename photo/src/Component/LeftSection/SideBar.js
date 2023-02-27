import React from 'react'
import style from './SideBar.module.css'
import {MdInsertPhoto,MdPhotoAlbum} from 'react-icons/md'
import {AiOutlineSearch,AiOutlineStar} from 'react-icons/ai'
import {BsPersonFill,BsTrash} from 'react-icons/bs'
import {BiArchiveIn}  from 'react-icons/bi'
export const SideBar = () => {
    const SideBar=[
        {
            name:"Photos",
            icon:<MdInsertPhoto/>
        },
        {
            name:"Explore",
            icon:<AiOutlineSearch/>
        },
        {
            name:"Sharing",
            icon:<BsPersonFill/>
        },
        {
            name:"Favorites",
            icon:<AiOutlineStar/>
        },
        {
            name:"Albums",
            icon:<MdPhotoAlbum/>
        },
        {
            name:"Archive",
            icon:<BiArchiveIn/>
        },
        {
            name:"Trash",
            icon:<BsTrash/>
        },
        

    ]
  return (
    <div className={style.SideBar}>
        {
            SideBar.map((item)=>{
                return(
                    <li className={style.leftSide}>
                        {item.icon}{item.name}

                        
                    </li>
                )
            })
        }
        </div>
  )
}

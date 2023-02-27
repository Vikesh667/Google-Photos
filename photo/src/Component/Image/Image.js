import React, { useEffect, useState } from "react";
import  style from './Image.module.css'
const Image=()=>{
    const[Query,setQuery]=useState("dog")
    const[data,setData]=useState([])
   const getImage=async()=>{
   
     const res=await fetch(`https://api.pexels.com/v1/search?query= ${Query}`,
     {
       headers:{
         Authorization:"1RHdmUS4ZA8gHgvjQlrHMAZsFbGOhuBNhAL5JAVvm1umOQtuM3h8UGwJ"
       }
     })
   const newData=await res.json()
   setData(newData.photos)
   console.log(data)
     
   }
   useEffect(()=>{
     getImage()
   },[])
      
     return (
        <div className={style.container}>
           
        {
         data?.map((item)=>{
           return(
             <div className={style.divContainer}>
             <div className={style.box}>
             <img src={item.src.medium }/>
             </div>
            </div>
           )
         })
         
        }
    
     </div>
       )
}
export default Image
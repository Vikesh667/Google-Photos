import React from "react";
import style from '../../Component/Image/Image.module.css'
import Box from "@mui/material/Box";
import { BiArrowBack, BiTrash } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { AiOutlineZoomIn } from "react-icons/ai";
import SharePhoto from "../../Atom/Share/SharePhoto";
const PictureBox = ({ item ,selectedImage, handleDelete,handleClose}) => {
 
    console.log(item.Key)
     return (
       <>
         <Box sx={style}>
           <div className={style.modal}>
             <button className={style.btn} onClick={()=>handleDelete(item.Key)}><BiTrash/></button>
             <button className={style.arrow} onClick={()=>handleClose()}><BiArrowBack/></button>
             <button className={style.btn3}>
              <FaRegEdit />
             </button>
             <button className={style.btn2}>
             <SharePhoto selectedImage={selectedImage}/> 
             </button>
             <button className={style.btn4}>
               <AiOutlineZoomIn />
             </button>
             <button className={style.btn5}>
               <RiInformationLine />
             </button>
   
             <img
               className={style.image1}
               src={`https://googlephotoreact.s3.ap-northeast-1.amazonaws.com/${selectedImage?.Key}`}
             />
           </div>
         </Box>
       </>
     );
   };

   export default PictureBox
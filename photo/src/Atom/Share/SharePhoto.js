import React, { useState } from "react";
import style from "./SharePhoto.module.css";
import { BiShareAlt } from "react-icons/bi";
import { FacebookShareButton, FacebookIcon } from "react-share";
import {
  WhatsappShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { WhatsappIcon, TwitterIcon, EmailIcon } from "react-share";
import { Button, Dialog, Modal } from "@mui/material";
const SharePhoto = ({ selectedImage }) => {
  const [open, setOpen] = React.useState(false);

  const [share, setShare] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(selectedImage);
  let imageUrl = `https://googlephotoreact.s3.ap-northeast-1.amazonaws.com/${selectedImage?.Key}`;
  console.log(imageUrl);
  return (
    <div>
      <button variant="outlined" onClick={handleClickOpen}>
        <BiShareAlt />
      </button>
      <Dialog
        className={style.dailog}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={style.shareIcon}>
            <span>
         <p>Share with Facebook</p> 
          <FacebookShareButton url={imageUrl}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          </span>
          <span>
          <p> Share with Whatsapp</p>
          <WhatsappShareButton url={imageUrl}>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
          </span>
          <span>
         <p>Share with Twitter</p>  
          <TwitterShareButton url={imageUrl}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          </span>
          <span>
            
       <p>  Share with Email </p>
          <EmailShareButton url={imageUrl}>
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
          </span>
        </div>
      </Dialog>
    </div>
  );
};

export default SharePhoto;

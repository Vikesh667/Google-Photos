import * as React from 'react';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {BiUpload} from 'react-icons/bi'
import {useState} from 'react'
export default function PopoverPopupState() {



  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
        <Button variant="contained" {...bindTrigger(popupState)} style={{height:"2.4rem",width:"9rem"}}>
        <Button
        as="label"
        htmlFor="imageInput"
        colorScheme="blue"
        variant="none"
        mb={1}
        cursor="pointer"
        
      >
       <BiUpload/> Import
      </Button>
          </Button>
        </div>
      )}
    </PopupState>
  );
}

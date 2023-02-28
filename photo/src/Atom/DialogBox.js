import * as React from "react";
import Button from "@mui/material/Button";
import style from "../Component/Image/Image.module.css";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import PictureBox from "../Component/PictureBox/PictureBox";
import { ImageApi } from "../Recoil";
import { useRecoilState } from "recoil";
export default function DialogBox() {
  const [file, setFile] = useState();

  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
   const[api, setApi]=useRecoilState(ImageApi)
  const handleOpen = (item,index) => {
    setSelectedIndex(index)
    setOpen(true);
  }
  
 

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null)
  };

  useEffect(()=>{
      if(selectedIndex===null){
        setSelectedImage(null)
      }
      setSelectedImage(gallery[selectedIndex])
  },[selectedIndex])
  async function handleSubmit(e) {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("data", file);
    const response = await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setGallery([...gallery,data.data])
    console.log(data ,"data")
  }

  const getImag = async () => {
    const res = await fetch("https://photonodejs.onrender.com/photos");
    const photos = await res.json();
    // const newPhoto= photos.group((photo)=>photo.LastModified)
    setGallery(photos);

    // console.log(photos);
  };
  useEffect(() => {
    getImag();
  }, []);

  const handleOpen1 = (Key) => {
    const openImg = gallery.filter((item) => {
      return item.Key == Key;
    });
  };
  const handleDelete = async (Key) => {
    const res = await fetch(`http://localhost:8000/delete/${Key}`,
    {
      method:"delete"
    }
    );
    const imageDelelet=await res.json()
    console.log(imageDelelet)
    const delteImage = gallery.filter((item) => {
      return item.key !== Key;
    });
     handleClose()
     setGallery(delteImage)
     setApi(delteImage)
     console.log(setApi)
  };
  return (
    <div>
      <Input
        className={style.input}
        type="search"
        id="imageSearch"
        value={search}
        placeholder="Search your photos"
        onChange={(e) => setSearch(e.target.value)}
      />
      <input id="imageInput" type="file" hidden onChange={handleSubmit} />
      <div className={style.container}>
        {gallery
          ?.filter((item) => {
            return search===""||item.Key.includes(search);
          })
          .map((item,index) => {
            return (
              // <div className={style.divContainer} >
                <div className={style.box} key={item.Key}>
                  <div
                    onClick={() => handleOpen1(item.Key)}
                    className={style.gallery}
                  >
                    <Button onClick={()=>handleOpen(item,index)}>
                      <img
                        src={`https://googlephotoreact.s3.ap-northeast-1.amazonaws.com/${item.Key}`}
                      />
                      {/* <h5>{item.LastModified}</h5> */}
                    </Button>
                    <Modal
                      open={open}
                      selected={item}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <PictureBox item={item} selectedImage={selectedImage} handleClose={handleClose} handleDelete={handleDelete}/>
                    </Modal>
                  </div>

                  <h1>{item.Etag}</h1>
                </div>
              // </div>
            );
          })}
      </div>
    </div>
  );
}



import React, { useState, useEffect,useRef ,useContext} from 'react';
import {axiosFilePost,axiosPost} from '../../utill/getAxios';
import { styled } from '@mui/material/styles';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {ItemContext} from '../provider/ItemContext.js'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Input = styled('input')({
    display: 'none',
  });

function ShowPhoto(props) {

 //화면전환 여부

  //const userInfo  = useContext(ItemContext);

  const [imgFile, changeFile] = useState();
  const [fileName, changeFileName] = useState("");
 const targetFile = useRef();

  useEffect(
    () => {
    
       console.log('showPhoto.js 렌더링 된다');
       
       return () => {

        console.log('showPhoto 컴포넌트가 화면에서 사라짐');
      };
    }, []
  );

  async function  handleUploadClick(e){
    e.preventDefault();
    console.log('handleUploadClick 수행');
    console.log('저장전 ',imgFile);
    console.log('저장전 대상 ',e.target.files);
   // setTimeout(() => {
  
    // changeFile(e.target.files[0]);
    // changeFileName(e.target.files[0].name);
     console.log('저장직후 ',imgFile);
      //imgBtnClick(file);
  //  
  
    setTimeout(() => {
      console.log('저장후 ',imgFile);
     // imgBtnClick(); 
    },1000) 

    console.log(targetFile.current.files[0]);

    const formData = new FormData();
      
    // formData.append("fieldname", 'userfile');
    // formData.append("file", file);
    // formData.append("fileName", fileName);

    formData.append(
     "userfile",
     targetFile.current.files[0],
     targetFile.current.files[0].name
   );


     try {

       let result = await axiosFilePost('/file/fileUpload',formData);
       if(result == 'success'){
           console.log('이미지 등록이 정상적으로 되었습니다');
          
       }

     } catch (exception) {
       console.log(exception);
     }
  }
   function imgBtnClick(){
    console.log('imgBtnClick 수행');
   
    if(imgFile == undefined || imgFile == null) return;
    console.log(imgFile);
      console.log(fileName);

      const formData = new FormData();
      
     // formData.append("fieldname", 'userfile');
     // formData.append("file", file);
     // formData.append("fileName", fileName);

     formData.append(
      "userfile",
      imgFile,
      fileName
    );


      try {

        let result =  axiosFilePost('/file/fileUpload',formData);
        if(result == 'success'){
            console.log('이미지 등록이 정상적으로 되었습니다');
           
        }

      } catch (exception) {
        console.log(exception);
      }

  }

  const itemData = [
    {
      img: 'img/images_1.jpg',
      title: 'Breakfast',
    },
    {
      img: 'img/images_2.jpg',
      title: 'Burger',
    },
    {
      img: 'img/images_3.jpg',
      title: 'Camera',
    },
    {
      img: 'img/images_4.jpg',
      title: 'Coffee',
    },
    {
      img: 'img/images_5.jpg',
      title: 'Hats',
    },
    {
      img: 'img/images_6.jpg',
      title: 'Honey',
    },
    {
      img: 'img/images_7.jpg',
      title: 'Basketball',
    },
    {
      img:'img/images_8.jpg',
      title: 'Fern',
    },
    {
      img: 'img/images_9.jpg',
      title: 'Mushrooms',
    }
  ];
  


  return (
         
     <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              p: 1,
              m: 1,
              height:65,
              width:'82%',
              mb:-2
            }}
          >
            <label htmlFor="contained-button-file">
                <Input accept="image/*" name="userfile" id="contained-button-file" ref={targetFile}  type="file"  onChange={handleUploadClick} />
                <Button 
                    variant="contained" 
                    component="span"
                    onClick = {imgBtnClick}
                    >
                    이미지 등록
                </Button>
            </label>
           
          </Box>
          <ImageList sx={{ width: '82%', height: 450 }} cols={6} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
        </ImageList>
         
          

        
    
        </div>
  );
}

export default ShowPhoto;
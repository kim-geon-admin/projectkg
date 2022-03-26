import React, { useState, useEffect,useRef ,useContext} from 'react';
import {axiosFilePost,axiosGet} from '../../utill/getAxios';
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
  const [fileList, setFileList] = useState([]);
 const targetFile = useRef();

  useEffect(
    () => {
    
       console.log('showPhoto.js 렌더링 된다');
       getFileList();

       return () => {

        console.log('showPhoto 컴포넌트가 화면에서 사라짐');
      };
    }, []
  );

  const getFileList = async ()=> {
    let result = await axiosGet('/file/fileList');
    setImgList(result);
  }

  const setImgList = (result) => {
    let fileListArr = [];
           result.fileList.forEach(element => {
             let obj = {
               img : 'img/'+element,
               title : element
             }
             fileListArr.push(obj);
           }
           );
           console.log('fileListArr',fileList);
           //'images_7_1648294488160.jpg'.substring('images_7_1648294488160.jpg'.lastIndexOf('_')+1,'images_7_1648294488160.jpg'.lastIndexOf('.'))
           fileListArr.sort(function(a, b)  {
            let preA = a.img.substring(a.img.lastIndexOf('_')+1,a.img.lastIndexOf('.'));
            let preB = b.img.substring(b.img.lastIndexOf('_')+1,b.img.lastIndexOf('.'));
            return preA - preB;
          });
           setFileList(fileListArr);

  }

  async function  handleUploadClick(e){
    e.preventDefault();

    console.log('저장전 대상 ',e.target.files);
 

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
       if(result.isSuccess == 'success'){
           console.log('이미지 등록이 정상적으로 되었습니다');
          
           setImgList(result);
       }

     } catch (exception) {
       console.log(exception);
     }
  }



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
                  //  onClick = {imgBtnClick}
                    >
                    이미지 등록
                </Button>
            </label>
           
          </Box>
          <ImageList sx={{ width: '82%', height: '90%' }} cols={6} rowHeight={164}>
                {fileList.map((item) => (
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
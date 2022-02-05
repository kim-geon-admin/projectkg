import React, { useState, useEffect } from 'react';
import {axiosGet} from '../../utill/getAxios';



function BoardViewData() {
  // IP주소 변수 선언
  const [rows, setRows] = useState([]);

  
  const  selectBoard = async () =>{
   
    let contents = await axiosGet('/getContents');
    console.table(contents);
    setRows(contents);

    }



  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
        selectBoard();
    }, []
  );

  return (
    
    <>
         {rows.map((data) => (
            <li key={data.id}> {data.user_id}
             
            </li>
          ))} 


    </>
  );
}

export default BoardViewData;
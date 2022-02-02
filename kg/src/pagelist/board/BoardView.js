import React, { useState, useEffect } from 'react';

import customAxios from '../../customAxios';
import { Button } from 'reactstrap';

function BoardView() {
  // IP주소 변수 선언
  const [rows, setRows] = useState([]);



  // IP주소 값을 설정합니다.
  function callback(data) {
  
  console.log(data);
  
    setRows(data);
   
  
  }



  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(


    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
    
      customAxios('/ip', callback);
 
    }, []
  );

  return (
    
    <div className="App">
      <header className="App-header">
    
      {/*  이 기기의 IP주소는 {rows}입니다d.*/}

         {rows.map((data) => (
            <li key={data.id}> {data.username}
             
            </li>
          ))} 

      </header>
      <Button color="primary">primary</Button>
    </div>
  );
}

export default BoardView;
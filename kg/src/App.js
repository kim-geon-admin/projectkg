import './App.css';
import Dashboard from './pagelist/Main';
import SignIn from './pagelist/SignIn';
import BoardView_test from './pagelist/board/BoardView_test';
import {BrowserRouter,Route,Router,Routes,Link} from 'react-router-dom';
import { createContext, useContext, useState,useEffect }  from 'react';
import {ItemContext} from './pagelist/provider/ItemContext.js'
import manageItem from './utill/manageItem';
function App() {
 

  let userInfo = new manageItem('김건','age');

    // 첫번째 렌더링을 다 마친 후 실행합니다.
    useEffect(
      () => {
          console.log('APP.js 렌터링');
      }
    );

  return (
    /* 테스트  1
    <div >
      <MenuRouter></MenuRouter>
    </div>
    */
   
    /* 로그인 
    <div >
      <SignIn/> 
    </div>
    */
   <div>
     <ItemContext.Provider  value={userInfo}>
    
              <Routes>
                  <Route path="/main" exact  element={<Dashboard/>} />
                  <Route path="/"  element={<SignIn/>} />
              </Routes>
       
    </ItemContext.Provider>
   </div>
  );  
} 
 
export default App;


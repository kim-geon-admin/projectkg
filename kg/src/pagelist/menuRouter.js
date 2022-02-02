import React, { Fragment } from 'react';
import {Route,Routes,NavLink} from 'react-router-dom';
import BoardView from "./board/BoardView";
import customAxios from '../customAxios';
const leftDivCss = {
  width:'20%',
  height:'95%',
  float: 'left',
  border: '1px solid #000'
};
  // IP주소 값을 설정합니다.


const menuRouter = () => {
    customAxios('/ip',   function callback(data) {
  
        console.log(data);
    
         
      });

    return (
        <Fragment>
            <div style={leftDivCss}>
            <h1>react router Dom example</h1>
            
                    <ul>
                        <li><NavLink  to="/add">home</NavLink></li>
                        <li><NavLink to="/board"> board</NavLink></li>
                        <li><NavLink to ="/contact">contact</NavLink></li>
                    </ul>
            </div>
            <div >
            <Routes>
                        <Route   path="/add"> 'home'</Route>
                        <Route path="/board" component={BoardView}></Route>
                        <Route path="/contact">'contatct'</Route>
                        <Route  path="/"> not found</Route>
            </Routes>

            </div>
        </Fragment>
    );
};

export default menuRouter;
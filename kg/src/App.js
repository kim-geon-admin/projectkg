import './App.css';
import Dashboard from './pagelist/Main';
import SignIn from './pagelist/SignIn';
import BoardView from './pagelist/board/BoardView';
import {BrowserRouter,Route,Router,Routes,Link} from 'react-router-dom';


function App() {

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
    
    <Routes>
         <Route path="/main" exact  element={<Dashboard/>} />
         <Route path="/login"  element={<SignIn/>} />
    </Routes>

  
   </div>
  );  
} 
 
export default App;


import React, { Fragment,useState,useRef,useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {axiosPost,axiosGet} from '../utill/getAxios';

import {useNavigate} from 'react-router-dom';
import {ItemContext} from './provider/ItemContext.js'


/*
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
*/


export default function SignIn() {

/*
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  */

  const [userId, setuserId] = useState("") ;
  const [userPass, setuserPass] = useState('') ;
  const itemInfo  = useContext(ItemContext);



  let navigate = useNavigate();
  

  const handleInputId = (e) =>{
   // console.log(e.target.value);
    setuserId(e.target.value);
  }

  const handleInputPass = (e) =>{
   // console.log(e.target.value); 
    setuserPass(e.target.value);
  }

 

const  authLogin = async () =>{
        let param = {
          user_id : userId,
          user_password : userPass
        }
    
      /* async awit 적용 전 버젼
        getAxios('/userInfo', param,  function callback(data) {
          navigate("/main")
        });
      */
       
      //async awit 적용 버젼
      let isAuthUser = await axiosPost('/user/userInfo', param);
      
      //사용자 토큰 정보 isAuthUser.jwt_token
      //사용자 계정 정보 isAuthUser.result
      //스프링부트에서는 isAuthUser.result => isAuthUser 사용
      if( isAuthUser.result != undefined && isAuthUser.result.length > 0 ){
  
        //globalLoginInfo.setGlobalLoginInfo(param);
        itemInfo.setItem('user_id',param.user_id);
        itemInfo.setItem('user_password',param.user_password);
        
        //session storage에 jwt 토큰 저장
        sessionStorage.setItem("token", isAuthUser.jwt_token);

          //session storage에 jwt 토큰 저장
          sessionStorage.setItem("user_id",param.user_id);


        navigate("/main",{state:param});


      }else{
        alert('인증된 사용자가 아닙니다') ;
      }
}




  return (


      <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 25,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                  
                    <Typography component="h1" variant="h5">
                      Sign in  
                    </Typography>
                    <Box component="form"  noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="ID"
                        name="email"
                        autoComplete="email"
                        value = {userId}
                        onChange = {handleInputId}
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value = {userPass}
                        onChange = {handleInputPass}
                 
                        autoComplete="current-password"
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        //type="submit"
                        onClick={authLogin}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
        
        </Container>

  
  );
}
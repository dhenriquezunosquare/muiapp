import React from 'react'
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import {styled } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { theme } from '../theme';
import { useNavigate } from 'react-router-dom';
import { RootContainer } from '../components/RootContainer';


const LoginContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent:'center',
})


const LoginForm = styled('form')({
    width: '100%',
    marginTop: '20px',
})

const InputText = styled(TextField)({
    "label":{
        color:theme.palette.primary.light+ "!important"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.secondary.main
        }
    }
})


export const Login = () => {


    let navigate = useNavigate();

    const handleLogin = ()=>{
        navigate("/home");
    }



    return (
        <RootContainer container>
            <Container component={Paper} elevation={5} maxWidth='xs' style={{ height: '60%', display: 'flex',justifyContent: 'center' }} >
                <LoginContainer style={{alignSelf:'center'}}>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.main }} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign In</Typography>
                    <LoginForm>
                        <InputText type="text" fullWidth autoFocus margin='normal' label="NickName" />
                        <InputText type="password" fullWidth margin='normal' label="Password"   />
                        <Button fullWidth variant='contained' style={{ backgroundColor: theme.palette.secondary.main, marginTop: '10px'}} onClick={handleLogin} > Login</Button>
                    </LoginForm>
                </LoginContainer>
            </Container>
        </RootContainer>
    )
}

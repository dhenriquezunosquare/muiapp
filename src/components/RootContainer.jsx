import React from 'react'
import { Grid } from "@mui/material";
import { styled } from '@mui/system';
import fondo from '../assets/fondo.jpg';


const FullContainer = styled(Grid)({
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex', justifyContent: 'center', alignItems: 'center' ,alignContent:'center',
})

export const RootContainer = ({children}) => {
    return (
        <>
            <FullContainer>
                {children}
            </FullContainer>
        </>
    )
}

import { Box, Container, Grid, Paper, Toolbar } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/sidebar/Sidebar'

const FullContainer = styled(Grid)({
  height: '100vh',
})

const MainContainer = styled(Grid)({
  height: '88vh',
})


export const Home = () => {
  return (
    <FullContainer container spacing={1} >
      <Grid item xs={2} md={2}  >
        <Sidebar />
      </Grid>

      <Grid item container xs={10} style={{ padding: 20 }}>
        <Container component={Paper} elevation={10}>
          <div style={{ padding: 10, margin: 10, marginTop:20 }} >
            <MainContainer container style={{overflow: 'auto'}} >
              <Container  maxWidth="lg"  >
                <Outlet />
              </Container>
            </MainContainer>
          </div>
        </Container>
      </Grid>
    </FullContainer>


  )
}

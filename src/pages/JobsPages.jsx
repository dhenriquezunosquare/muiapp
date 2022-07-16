import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Paper, styled, Toolbar, Typography } from '@mui/material'
import { border, borderRadius } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { JobCard } from '../components/jobscard/JobCard'
import { CarData } from '../data/db'
import { theme } from '../theme'


const MainContainer = styled(Grid)({
  height: '80vh',
})


const TitleContainer = styled(Grid)({
  background: theme.palette.secondary.main,
  color: '#fff',
  borderRadius: 8,
  padding: 10,
  boxShadow: '0 0 24px rgba(0,0,0,0.5)',
})

export const JobsPages = () => {

  const [data, setData] = useState([]);
  const getData = async () => {
    const url = "https://random-data-api.com/api/company/random_company?size=10";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])



  // const data = CarData;

  return (
    <>
      <TitleContainer item xs={12} >
        <Typography variant="h4" align="center" style={{ fontWeight: "bold" }}>
          List of Companies
        </Typography>
      </TitleContainer>
      <Toolbar />


      <Grid container spacing={3} >
        {data && data.length > 0 &&
          data.map((j) => (
            <Grid key={j.id} item xs={12} md={3}>
              <JobCard  logo={j.logo} business_name={j.business_name} industry={j.industry} />
            </Grid>
          ))
        }
      </Grid>







    </>


  )
}

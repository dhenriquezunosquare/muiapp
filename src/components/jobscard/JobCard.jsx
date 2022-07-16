import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'

export const JobCard = ({ logo = "", business_name = "",industry="" }) => {
    return (
        <Card sx={{ maxWidth: 200, height: 250,padding:2 }}>
            <div style={{height:'100px', display:'flex' }}>
                <CardMedia component="img"  style={{objectFit:'contain',}} image={logo} alt="Card image" />
            </div>
            <Divider/>
            <CardContent style={{ height: 70 }}>
                <Typography variant="body2" color="text.primary">
                    {business_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Industry: {industry}
                </Typography>
            </CardContent>
            <CardActions style={{display: 'flex', justifyContent: 'center'}} >
                <Button fullWidth variant="contained" style={{backgroundColor:theme.palette.secondary.main}} size="small">Apply</Button>
            </CardActions>
        </Card>

    )
}

import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Service = (props) => {
    const { img, name, description } = props.service


    return (

        <Grid data-aos="fade-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: "80px", margin: "0 auto" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ p: 1 }} >
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>


    );
};

export default Service;
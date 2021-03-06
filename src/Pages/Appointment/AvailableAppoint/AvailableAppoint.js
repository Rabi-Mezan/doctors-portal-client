import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Bookings from '../Bookings/Bookings';

const AvailableAppoint = ({ date }) => {

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            price: '10',
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            price: '13',
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            price: '18',
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            price: '20',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            price: '30',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            price: '25',
            space: 10,
        },
    ]

    return (
        <Container sx={{ my: 5 }}>
            <Typography variant='h4' sx={{ my: 4, fontWeight: 500 }} style={{ color: '#00e5ff' }}>Availavle appointment {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Bookings
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Bookings>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoint;
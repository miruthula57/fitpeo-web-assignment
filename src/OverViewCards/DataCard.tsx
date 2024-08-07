import FastfoodIcon from '@mui/icons-material/Fastfood';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Avatar, Box, CardContent, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';

const DataCard: React.FC = () => {
    const data = [
        { avatar: <MyLocationIcon />, text: 'Goals', additional: '123', color: '#8B4513' }, // Brown
        { avatar: <FastfoodIcon />, text: 'Popular Dishes', additional: '456', color: '#1E90FF' }, // Blue
        { avatar: <RamenDiningIcon />, text: 'Menus', additional: '789', color: '#32CD32' }, // Light Green
    ];

    return (
        <Paper style={{ padding: '8px', backgroundColor: '#444', color: 'white', flex: 1, margin: '0 8px', position: 'relative' }}>
            {data.map((item, index) => (
                <CardContent key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            sx={{
                                marginRight: 2,
                                backgroundColor: item.color,
                                color: 'white',
                                boxShadow: `0px 4px 6px ${item.color}`,
                            }}
                        >
                            {item.avatar}
                        </Avatar>
                        <Typography variant="body1">{item.text}</Typography>
                    </Box>
                    <Box sx={{ flex: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IconButton
                            sx={{
                                borderRadius: '50%',
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                boxShadow: 3,
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                },
                                color: "white"
                            }}
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            ))}
        </Paper>
    );
};

export default DataCard;

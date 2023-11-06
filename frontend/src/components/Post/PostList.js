import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';

export default function PostList() {

    return (
        <List
            sx={{ width: '82%', margin: '0 30px' }}
            component="nav"
        >
            <ListItem sx={{ marginTop: '10px', bgcolor: '#242526', flexDirection: 'column', borderRadius: 3 }}>
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                    <ListItemAvatar>
                        <Avatar alt='Avatar' src='/assets/images/ava.jpg' />
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Typography sx={{ color: '#d4d6da', fontWeight: "bold", fontSize: '1rem' }}>
                            Quang Tú
                        </Typography>
                    } secondary={
                        <Typography sx={{ color: '#7f8285', fontSize: '0.8rem', fontWeight: '100' }}>
                            Jan 9, 2014
                        </Typography>
                    } />
                </Box>
                <Box sx={{ color: '#cfd1d6', width: '100%' }}>
                    Description
                </Box>
                <Box sx={{ width: '100%' }} mt={1}>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="Image" style={{ width: 'inherit', height: '715px', alignItems: 'center' }} />
                </Box>
            </ListItem>

        </List >
    )
}
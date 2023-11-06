import * as React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar } from '@mui/material';

const textStyle = {
    color: '#d4d5d9',
    fontWeight: "bold",
    fontSize: '1rem'
}

export default function RightSideBar() {
    return (
        <List
            sx={{ width: '100%', bgcolor: '#18191a', height: '100vh' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <Typography sx={textStyle}>
                Người liên hệ
            </Typography>
            <ListItemButton sx={{
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'silver',
                }
            }}>
                <ListItemIcon>
                    <Avatar alt="Hoang Long" src="/static/images/avatar/1.jpg" />
                </ListItemIcon>
                <ListItemText primary={
                    <Typography sx={textStyle}>
                        Hoàng Long
                    </Typography>
                } />
            </ListItemButton>
            <ListItemButton sx={{
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'silver',
                }
            }}>
                <ListItemIcon>
                    <Avatar alt="Vu Dung" src="/static/images/avatar/1.jpg" />
                </ListItemIcon>
                <ListItemText primary={
                    <Typography sx={textStyle}>
                        Vu Dung
                    </Typography>
                } />
            </ListItemButton>
        </List>
    )
}
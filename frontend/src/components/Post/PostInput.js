import * as React from 'react';
import { Button, Box, TextField, IconButton, Avatar } from '@mui/material';
import { Videocam, Photo, Mood } from '@mui/icons-material';

export default function PostInput() {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#333', padding: 2, borderRadius: 3, width: '85%',  // Chỉnh sửa tại đây
            boxSizing: 'border-box'
        }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Quang ơi, bạn đang nghĩ gì thế?"
                InputProps={{
                    style: { color: 'white', backgroundColor: '#444', borderRadius: 5 },
                    startAdornment: (
                        <IconButton size="small" sx={{ marginRight: 1 }}>
                            <Avatar
                                alt="Avatar" src="/assets/images/ava.jpg"
                                sx={{
                                    bgcolor: 'orange',
                                    width: 30,  // Chiều rộng của avatar
                                    height: 30,  // Chiều cao của avatar
                                    border: '3px solid #FFFFFF',  // Viền trắng cho avatar
                                }}
                            ></Avatar>
                        </IconButton>
                    )
                }}
            />
            <Box sx={{ display: 'flex', marginTop: 2, width: '100%' }} gap={1}>
                <Button startIcon={<Videocam />} variant="contained" color="error">
                    Video trực tiếp
                </Button>
                <Button startIcon={<Photo />} variant="contained" color="success">
                    Ảnh/video
                </Button>
                <Button startIcon={<Mood />} variant="contained" color="warning">
                    Cảm xúc/hoạt động
                </Button>
            </Box>
        </Box>
    );
}
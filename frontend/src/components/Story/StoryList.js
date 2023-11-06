import React from 'react';
import { Paper, Avatar, Typography, Box } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const stories = [
    { id: 1, name: 'Người 1', avatar: null, background: '/assets/images/story1.jpg' },
    { id: 2, name: 'Người 2', avatar: null, background: '/assets/images/story2.png' },
    { id: 3, name: 'Người 3', avatar: null, background: '/assets/images/story2.png' },
    // ... thêm các stories khác
];

export default function StoryList() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            gap={2}
            p={2}
            alignItems="center"
            style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
        >

            <Paper
                style={{
                    padding: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 155,  // Chiều rộng của ô item
                    height: 255,  // Chiều cao của ô item
                    backgroundColor: '#f0f2f5',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: deepOrange[500],
                        width: 30,  // Chiều rộng của avatar
                        height: 30,  // Chiều cao của avatar
                        border: '3px solid #FFFFFF',  // Viền trắng cho avatar
                    }}
                >
                </Avatar>
                <Typography sx={{ mt: 1, fontWeight: 'bold', fontSize: '0.8rem' }}>
                    Tạo tin
                </Typography>
                <AddCircleOutlineIcon sx={{ cursor: 'pointer', color: 'blue' }} />
            </Paper>

            {stories.map((story, index) => (
                <Paper
                    key={story.id}
                    style={{
                        padding: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 155,  // Chiều rộng của ô item
                        height: 255,  // Chiều cao của ô item
                        backgroundColor: '#f0f2f5',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        backgroundImage: `url(${story.background})`,  // Thêm background ở đây
                        backgroundSize: 'cover',  // Đảm bảo background fill đầy paper
                        backgroundPosition: 'center',  // Canh chính giữa
                        cursor: 'pointer'
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: deepOrange[500],
                            width: 30,  // Chiều rộng của avatar
                            height: 30,  // Chiều cao của avatar
                            border: '3px solid #FFFFFF',  // Viền trắng cho avatar
                        }}
                    >
                        {story.name.charAt(0)}
                    </Avatar>
                    <Typography sx={{ mt: 1, fontWeight: 'bold', fontSize: '0.8rem' }}>
                        {story.name}
                    </Typography>
                </Paper>
            ))}

        </Box>
    );
}
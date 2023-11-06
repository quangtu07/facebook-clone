import React from 'react';
import {
    Box, Typography
} from '@mui/material';
import Form from './Form';

function LoginPage() {

    return (
        <Box>
            <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f0f2f5' }}>
                <Box>
                    <Typography fontWeight="bold" fontSize="60px" color="#0866ff">facebook</Typography>
                    <Typography fontSize="20px" color="black">
                        Facebook giúp bạn kết nối và chia sẻ <br /> với mọi người trong cuộc sống của bạn.
                    </Typography>
                </Box>
                <Box paddingLeft="85px">
                    <Form />
                </Box>
            </Box>
        </Box>
    );
}

export default LoginPage;
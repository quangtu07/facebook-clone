import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Thêm dòng này để ngăn form gửi theo cách truyền thống
        const loggedInResponse = await fetch('http://localhost:7000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const loggedIn = await loggedInResponse.json();
        if (loggedIn) {
            console.log(loggedIn);
            dispatch(authActions.setLogin({ user: loggedIn.user, token: loggedIn.token }));
            navigate('/home');
        }
    }

    return (
        <Box
            component="form" padding='20px' borderRadius='10px'
            boxShadow='0 0 10px 1px #888888'
            onSubmit={handleSubmit} // Sự kiện onSubmit cho form
        >
            <Box paddingBottom='10px'>
                <Typography fontWeight='bold' color='blue' textAlign='center' fontSize='20px' >Đăng nhập facebook</Typography>
            </Box>
            <Box marginTop='10px'>
                <TextField name='email' label="Email hoặc số điện thoại" variant="outlined" sx={{ width: '350px' }} value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </Box>
            <Box marginTop='10px'>
                <TextField name='password' label="Mật khẩu" variant="outlined" sx={{ width: '350px' }} value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </Box>
            <Box marginTop='10px'>
                <Button variant="contained" type="submit" sx={{ width: '100%' }}>Đăng nhập</Button>
            </Box>
        </Box>
    );
}

export default Form;

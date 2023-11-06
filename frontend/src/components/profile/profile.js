import { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../common/Navbar';
import { Avatar, Typography } from '@mui/material';


const arrCate = [
    {
        id: 1,
        text: 'Info'
    },
    {
        id: 2,
        text: 'Bạn bè'
    },
    {
        id: 3,
        text: 'Ảnh'
    }
]

export default function Profile() {

    // State để theo dõi tab hiện tại
    const [activeTab, setActiveTab] = useState(arrCate[0].text);

    const handleClick = (text) => {
        // Cập nhật state khi một tab được click
        setActiveTab(text);
    };

    return (
        <Box sx={{ bgcolor: '#242526' }}>
            <Box>
                <Navbar />
            </Box>
            <Box sx={{ paddingTop: '65px' }}>
                <Box sx={{ border: '2px solid red', bgcolor: '#242526', margin: '0 15%' }} >
                    <Box sx={{ padding: '20px 20px', display: 'flex' }}>
                        <Avatar alt="Avatar" src="/assets/images/ava.jpg" sx={{ width: "168px", height: '168px' }} />
                        <Box>
                            <Typography sx={{ color: '#d4d6da', fontWeight: "bold", fontSize: '2rem', paddingTop: '30px', paddingLeft: '20px' }}>
                                Quang Tú
                            </Typography>
                            <Typography sx={{ color: '#cfd1d6', fontWeight: "100", fontSize: '1rem', paddingLeft: '20px' }}>
                                1,1k bạn bè
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ borderTop: '0.5px solid white', color: '#d4d6da', fontSize: '1rem', fontWeight: '100', padding: '15px 0', display: 'flex' }}>
                        {arrCate.map((cate) => {
                            // Áp dụng styles dựa trên tab hiện tại
                            const isActive = activeTab === cate.text;
                            return <Typography key={cate.id} className='' sx={{
                                paddingLeft: '20px', cursor: 'pointer', color: isActive ? 'blue' : '',
                                textDecoration: isActive ? 'underline' : ''
                            }} onClick={() => handleClick(cate.text)}>{cate.text}</Typography>
                        })}

                    </Box>
                    <Box>
                        {(activeTab === 'Info') ? (
                            <Box sx={{ width: '40%', backgroundColor: 'grey', padding: '10px 20px', color: '#d4d6da', borderRadius: '5px' }}>
                                <Typography>Thông tin cá nhân</Typography>
                            </Box>
                        ) : null}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
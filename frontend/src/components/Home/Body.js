import Box from '@mui/material/Box';
import LeftSidebar from './LeftSidebar';
import Main from './Main';
import RightSideBar from './RightSideBar';

const Body = () => {
    return (
        <Box display="flex" sx={{ bgcolor: '#18191a' }}>
            {/* LeftSidebar fixed on the screen */}
            <Box flex="1" sx={{
                position: 'sticky', top: 0, height: '100vh', overflowY: 'hidden', // ban đầu ẩn thanh cuộn
                '&:hover': {
                    overflowY: 'auto', // khi hover, hiện thanh cuộn
                },
            }}>
                <LeftSidebar />
            </Box>
            {/* Main scrolls normally */}
            <Box flex="3" sx={{ overflowY: 'hidden' }}>
                <Main />
            </Box>
            {/* RightSideBar fixed on the screen */}
            <Box flex="1" sx={{
                position: 'sticky', top: 0, height: '100vh', overflowY: 'hidden', // ban đầu ẩn thanh cuộn
                '&:hover': {
                    overflowY: 'auto', // khi hover, hiện thanh cuộn
                },
            }}>
                <RightSideBar />
            </Box>
        </Box>
    )
}

export default Body;

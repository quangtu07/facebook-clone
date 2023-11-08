import Box from '@mui/material/Box';
import Navbar from '../common/Navbar';
import Body from './Body';
import { useSelector } from 'react-redux';

const Home = () => {

    return (
        <Box>
            <Navbar />
            <Box sx={{ pt: 8 }}> {/* pt: 8 là ví dụ, bạn có thể điều chỉnh giá trị cho phù hợp */}
                <Body />
            </Box>
        </Box >
    )
}

export default Home
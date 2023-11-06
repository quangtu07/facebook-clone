import StoryList from "../Story/StoryList";
import PostInput from "../Post/PostInput";
import PostList from "../Post/PostList";
import { Box } from '@mui/material'
import { List, ListItemButton } from '@mui/material';


export default function Main() {
    return (
        <List
            sx={{ width: '100%', bgcolor: '#18191a', paddingLeft: '45px', paddingRight: '45px' }}
            component="nav"
        >
            <ListItemButton>
                <StoryList />
            </ListItemButton>
            <Box sx={{ paddingLeft: '30px' }} >
                <PostInput />
            </Box>
            <Box>
                <PostList />
            </Box>
        </List>
    )
}
import { useEffect } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';

const textStyle = {
    color: '#d4d5d9',
    fontWeight: "bold",
    fontSize: '1rem'
}

export default function RightSideBar() {
    const { friends } = useSelector((state) => state.user)
    const token = useSelector((state) => state.token)

    const dispatch = useDispatch();

    const getFriends = async () => {
        const response = await fetch(
            `http://localhost:7000/api/user/friends`,
            {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            },
        );
        const data = await response.json();
        dispatch(authActions.setFriends({ friends: data }));
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <List
            sx={{ width: '100%', bgcolor: '#18191a', height: '100vh' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <Typography sx={textStyle}>
                Người liên hệ
            </Typography>
            {Array.isArray(friends) ? (friends.map((friend) => (
                <ListItemButton key={friend._id} sx={{
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'silver',
                    }
                }}>
                    <ListItemIcon>
                        <Avatar alt="Friend" src="/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography sx={textStyle}>
                            {`${friend.firstName} ${friend.lastName}`}
                        </Typography>
                    } />
                </ListItemButton>
            ))) : null}

        </List>
    )
}
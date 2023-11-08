import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { AppBar, Box, Toolbar, Typography, Avatar, InputBase, InputAdornment, IconButton, Popover, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import Stack from '@mui/material/Stack';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useSelector } from 'react-redux';

const iconStyle = {
    fontWeight: "bold",
    fontSize: '2rem'
}

export default function Navbar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const { picturePath } = useSelector((state) => state.user)

    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'avatar-popover' : undefined;

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="fixed" style={{ backgroundColor: "#242526" }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                        <Typography variant="h6" component="div" sx={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
                            <Avatar alt="Facebook" src="/assets/images/logo.png"></Avatar>
                        </Typography>
                        {/* Search bar */}
                        <InputBase
                            sx={{ marginLeft: 2, flex: 0.35, backgroundColor: '#3a3b3c', borderRadius: 5 }}
                            placeholder="Tìm kiếm" inputProps={{ style: { color: '#ab9d86' } }} startAdornment={
                                <InputAdornment position="start" style={{ color: '#ab9d86' }}>
                                    <SearchIcon sx={{ paddingLeft: 1 }} />
                                </InputAdornment>
                            }
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginX: 'auto' }}>
                        <IconButton color="inherit" onClick={() => navigate("/")}>
                            <HomeSharpIcon sx={iconStyle} />
                        </IconButton>
                        {/* Video icon navigate to video page */}
                        <IconButton color="inherit" onClick={() => navigate("/video")}>
                            <OndemandVideoOutlinedIcon sx={iconStyle} />
                        </IconButton>
                        {/* Market icon navigate to market page */}
                        <IconButton color="inherit" onClick={() => navigate("/market")}>
                            <StoreIcon sx={iconStyle} />
                        </IconButton>
                        {/* Group icon navigate to group page */}
                        <IconButton color="inherit" onClick={() => navigate("/group")}>
                            <GroupsIcon sx={iconStyle} />
                        </IconButton>
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar sx={{ bgcolor: '#3a3b3c', cursor: 'pointer' }}><MessageRoundedIcon /></Avatar>
                            <Avatar sx={{ bgcolor: '#3a3b3c', cursor: 'pointer' }}><NotificationsRoundedIcon /></Avatar>

                            <Avatar sx={{ cursor: 'pointer' }} alt="Avatar" src={`/assets/images/${picturePath}`} onClick={handleClick} />
                        </Stack>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            style={{ maxHeight: '300px', overflow: 'auto' }}
                        >
                            <List>
                                <ListItem button onClick={() => {
                                    handleClose();
                                    navigate("/profile");
                                }}>
                                    <ListItemText primary="Profile" />
                                </ListItem>
                                <ListItem button onClick={() => {
                                    handleClose();
                                    dispatch(authActions.setLogout())
                                }}>
                                    <ListItemText primary="Đăng Xuất" />
                                </ListItem>
                            </List>
                        </Popover>
                    </Box>
                </Toolbar>

            </AppBar>
        </Box >
    );
}
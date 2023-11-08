import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import Avatar from '@mui/material/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StoreIcon from '@mui/icons-material/Store';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const textStyle = {
    color: '#d4d5d9',
    fontWeight: "bold",
    fontSize: '1rem'
}

const initialCategories = [
    {
        text: "Bạn bè",
        type: 'PeopleIcon',
        color: '#4dd0e1'
    },
    {
        text: "Đã lưu",
        type: "SavedIcon",
        color: '#c93cb6'
    },
    {
        text: "Video",
        type: "Video",
        color: '#4dd0e1'
    },
    {
        text: 'Marketplace',
        type: "Marketplace",
        color: '#4dd0e1'
    }
];

const componentMap = {
    'avatar': Avatar,
    'PeopleIcon': PeopleIcon,
    'SavedIcon': BookmarkIcon,
    'Video': OndemandVideoOutlinedIcon,
    'Marketplace': StoreIcon
};

export default function LeftSidebar() {
    const { firstName, lastName, picturePath } = useSelector((state) => state.user)

    return (
        <List
            sx={{ width: '100%', bgcolor: '#18191a', height: '100vh' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton
                sx={{
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'silver',
                    }
                }}
            >
                <ListItemIcon>
                    <Avatar
                        alt="Avatar"
                        src={`/assets/images/${picturePath}`}
                        sx={{ width: 40, height: 40 }}
                    />
                </ListItemIcon>
                <ListItemText primary={
                    <Typography sx={textStyle}>
                        {`${firstName} ${lastName}`}
                    </Typography>
                } />
            </ListItemButton>
            {initialCategories.map((cate, index) => {
                const Component = componentMap[cate.type];
                return (
                    <ListItemButton
                        key={cate.text}
                        sx={{
                            backgroundColor: 'transparent',
                            '&:hover': {
                                backgroundColor: 'silver',
                            }
                        }}
                    >
                        <ListItemIcon>
                            <Component
                                alt={cate.type === 'avatar' ? "Avatar" : ""}
                                src={cate.type === 'avatar' ? "/assets/images/ava.jpg" : undefined}
                                sx={cate.type === 'avatar' ? { width: 40, height: 40 } : { color: cate.color, fontSize: 40 }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography sx={textStyle}>
                                {cate.text}
                            </Typography>
                        } />
                    </ListItemButton>
                )
            })}
        </List>
    )
}

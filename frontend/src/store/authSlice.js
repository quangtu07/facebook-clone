import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    posts: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error(`user friends non-existent`);
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        setPost: (state, action) => {
            const updatedPost = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPost;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
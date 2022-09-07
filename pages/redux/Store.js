import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    posts: postsReducer,
})
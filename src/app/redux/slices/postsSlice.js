import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../../api/service"; 
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const { data } = await service.getAllPosts(); 
        return data;
    }
);


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        isError: "",
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true; 
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false; 
                state.isError = action.error.message; 
            });
    },
});

export default postsSlice.reducer; 

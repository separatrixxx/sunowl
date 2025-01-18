import { createSlice } from '@reduxjs/toolkit'
import { RefreshInterface } from '../../interfaces/refresh.interface';


const refreshData: RefreshInterface = {
    pool: true,
    user: true,
}

export const refreshSlice = createSlice({
    name: 'refresh',
    initialState: {
        refresh: refreshData,
    },
    reducers: {
        changePool: (state, action) => {
            state.refresh.pool = action.payload
        },
        changeUser: (state, action) => {
            state.refresh.user = action.payload
        },
    },
});

export const { changePool, changeUser } = refreshSlice.actions;

export default refreshSlice.reducer;

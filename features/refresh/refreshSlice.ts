import { createSlice } from '@reduxjs/toolkit'
import { RefreshInterface } from '../../interfaces/refresh.interface';


const refreshData: RefreshInterface = {
    user: true,
    pool: true,
    tasks: true,
}

export const refreshSlice = createSlice({
    name: 'refresh',
    initialState: {
        refresh: refreshData,
    },
    reducers: {
        changeUser: (state, action) => {
            state.refresh.user = action.payload
        },
        changePool: (state, action) => {
            state.refresh.pool = action.payload
        },
        changeTasks: (state, action) => {
            state.refresh.tasks = action.payload
        },
    },
});

export const { changeUser, changePool, changeTasks } = refreshSlice.actions;

export default refreshSlice.reducer;

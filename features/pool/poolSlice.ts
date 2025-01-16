import { createSlice } from '@reduxjs/toolkit'
import { PoolInterface } from '../../interfaces/pool.interface';


const poolData: PoolInterface = {
    status: '',
    data: {
        total_pool: 0,
        total_claimed: 0,
        tokens_remaining: 0,
        usage_percentage: 0,
    }
}

export const poolSlice = createSlice({
    name: 'pool',
    initialState: {
        pool: poolData,
    },
    reducers: {
        setPool: (state, action) => {
            state.pool = action.payload
        },
    },
});

export const { setPool } = poolSlice.actions;

export default poolSlice.reducer;

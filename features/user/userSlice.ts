import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
    status: '',
    data: {
        user_id: 0,
        reffreal_id: null,
        timestamp_created: '',
        fully_authorized: false,
        authentication: {
            chat: false,
            twitter: false,
            telegram: false,
            ton_wallet: false,
            tron_wallet: false
        },
        claims_total: 0,
        claims_log: [],
        connected_accounts_cache: {},
        claims_available_per_day: 3,
        last_login: null,
        daily_login_log: {},
        login_count: 0,
        task_open_count: 0,
        statistics: {
            claimed_total: 0,
            claimed_count: 0,
            total_friends: 0,
            authorized_friends: 0,
            friend_ids: [],
            authorized_friend_ids: []
        },
        auth_requirements: {
            message: '',
            required_steps: []
        },
        optional_connections: {
            message: '',
            available_connections: []
        }
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: userData,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserDefault: (state) => {
            state.user = userData
        },
    },
});

export const { setUser, setUserDefault } = userSlice.actions;

export default userSlice.reducer;

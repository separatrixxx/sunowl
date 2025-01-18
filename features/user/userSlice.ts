import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
    status: '',
    data: {
        user_id: 0,
        reffreal_id: null,
        refferal_link: '',
        timestamp_created: '',
        fully_authorized: false,
        authentication: [],
        claims_total: 0,
        claims_log: {},
        connected_accounts_cache: {},
        claims_available_per_day: 0,
        last_login: null,
        daily_login_log: {},
        login_count: 0,
        task_open_count: 0,
        statistics: {
            claimed_total: 0,
            claimed_count: 0,
            claims_used_today: 0,
            total_friends: 0,
            authorized_friends: 0,
            referral_details: [],
            authorized_friend_ids: [],
            completed_tasks: {
                total: 0,
                'TaskType.RAID_tasks': 0,
                'TaskType.CLAIM_tasks': 0,
            },
        },
        auth_requirements: {
            message: '',
            required_steps: [],
        },
        optional_connections: {
            message: '',
            available_connections: [],
        },
    },
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

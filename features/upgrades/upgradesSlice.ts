import { createSlice } from '@reduxjs/toolkit'
import { UpgradesInterface } from '../../interfaces/upgrades.interface';


const upgradesData: UpgradesInterface = {
    status: '',
    data: {
        current_spins: 0,
        upgrades: {
            level_2: {
                spins: 0,
                price: 0,
                ton_price: 0,
                description: '',
                available: true,
            },
            level_3: {
                spins: 0,
                price: 0,
                ton_price: 0,
                description: '',
                available: true,
            },
            level_4: {
                spins: 0,
                price: 0,
                ton_price: 0,
                description: '',
                available: true,
            },
            level_8: {
                spins: 0,
                price: 0,
                ton_price: 0,
                description: '',
                available: true,
            },
        },
    }
}

export const upgradesSlice = createSlice({
    name: 'upgrades',
    initialState: {
        upgrades: upgradesData,
    },
    reducers: {
        setUpgrades: (state, action) => {
            state.upgrades = action.payload
        },
    },
});

export const { setUpgrades } = upgradesSlice.actions;

export default upgradesSlice.reducer;

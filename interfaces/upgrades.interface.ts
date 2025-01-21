export interface UpgradesInterface {
    status: string,
    data: {
        current_spins: number,
        upgrades: {
            level_2: UpgradeItem,
            level_3: UpgradeItem,
            level_4: UpgradeItem,
            level_8: UpgradeItem,
        },
    },
}

export interface UpgradeItem {
    spins: number,
    price: number,
    description: string,
    available: boolean,
}

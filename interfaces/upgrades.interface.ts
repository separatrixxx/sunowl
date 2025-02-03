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
    ton_price: number,
    description: string,
    available: boolean,
}

export interface PayRequestInterface {
    status: string,
    data: {
        payment_url?: string,
        wallet_address?: string,
        amount: number,
        currency: string,
        payment_type: string,
        upgrade_details: {
            from_spins: number,
            to_spins: number,
            description: string,
        },
    },
}

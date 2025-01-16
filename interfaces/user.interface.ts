export interface UserInterface {
    status: string,
    data: {
        user_id: number,
        reffreal_id: number | null,
        timestamp_created: string,
        fully_authorized: boolean,
        authentication: {
            chat: boolean,
            twitter: boolean,
            telegram: boolean,
            ton_wallet: boolean,
            tron_wallet: boolean
        },
        claims_total: number,
        claims_log: ClaimsLogInterface[],
        connected_accounts_cache: any,
        claims_available_per_day: number,
        last_login: string | null,
        daily_login_log: any,
        login_count: number,
        task_open_count: number,
        statistics: StatisticsInterface,
        auth_requirements: AuthRequirementsInterface,
        optional_connections: OptionalConnectionsInterface
    }
}

export interface ClaimsLogInterface {
    action: string,
    timestamp: string,
    tokens_won: number,
    remaining_claims: number,
}

export interface StatisticsInterface {
    claimed_total: number,
    claimed_count: number,
    total_friends: number,
    authorized_friends: number,
    friend_ids: number[],
    authorized_friend_ids: number[]
}

export interface AuthRequirementsInterface {
    message: string,
    required_steps: {
        type: string,
        auth_url: string,
        description: string
    }[]
}

export interface OptionalConnectionsInterface {
    message: string,
    available_connections: {
        type: string,
        connection_url: string,
        description: string
    }[]
}

export interface UserInterface {
    status: string,
    data: {
        user_id: number,
        reffreal_id: number | null,
        refferal_link: string,
        timestamp_created: string,
        fully_authorized: boolean,
        authentication: AuthenticationInterface[],
        claims_total: number,
        claims_log: ClaimsLogInterface | {},
        connected_accounts_cache: ConnectedAccountsCacheInterface,
        claims_available_per_day: number,
        last_login: string | null,
        daily_login_log: any,
        login_count: number,
        task_open_count: number,
        statistics: StatisticsInterface,
        auth_requirements?: AuthRequirementsInterface,
        optional_connections?: OptionalConnectionsInterface,
    }
}

export interface AuthenticationInterface {
    [key: string]: boolean | string | undefined,
    description: string,
    auth_url?: string,
}

export interface ClaimsLogInterface {
    action: string,
    timestamp: string,
    tokens_won: number,
    remaining_claims: number,
}

export interface ConnectedAccountsCacheInterface {
    [key: string]: {
        chat_id?: number,
        is_member?: boolean,
        channel?: string,
        subscribed?: boolean,
        last_checked: string,
    }
}

export interface StatisticsInterface {
    claimed_total: number,
    claimed_count: number,
    total_friends: number,
    authorized_friends: number,
    referral_details: ReferralDetailInterface[],
    authorized_friend_ids: number[],
}

export interface ReferralDetailInterface {
    user_id: number,
    fully_authorized: boolean,
    profile_name: string | null,
    profile_url: string | null,
}

export interface AuthRequirementsInterface {
    message: string,
    required_steps: {
        type: string,
        auth_url: string,
        description: string
    }[],
}

export interface OptionalConnectionsInterface {
    message: string,
    available_connections: {
        type: string,
        connection_url: string,
        description: string
    }[],
}

export interface PoolInterface {
    status: string,
    data: {
        total_pool: number,
        total_claimed: number,
        tokens_remaining: number,
        usage_percentage: number,
    }
}

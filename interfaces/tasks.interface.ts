export interface TasksInterface {
    status: string,
    data: {
        event_tasks: {
            active: TaskInterface[],
            completed: TaskInterface[],
        },
        raid_tasks: {
            active: TaskInterface[],
            completed: TaskInterface[],
            missed: TaskInterface[],
        },
        claim_tasks: {
            groups: {
                [group_name: string]: ClaimTaskGroupInterface,
            },
        },
    },
}

export interface TaskInterface {
    task_id: string,
    name: string,
    description: string,
    status: 'active' | 'completed' | 'expired' | 'upcoming',
    tag: string,
    reward: number,
    verification: any,
    timestamp_start: string,
    timestamp_end: string | null,
    completed: boolean,
}

export interface ClaimTaskGroupInterface {
    group_id: string,
    tasks: TaskInterface[],
    completed_count: number,
    total_count: number,
    is_completed: boolean,
}

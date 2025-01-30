export interface TasksInterface {
    status: string,
    task_delimeter: number,
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

export interface ClaimTaskGroupInterface {
    group_id: string,
    tasks: TaskInterface[],
    completed_count: number,
    total_count: number,
    is_completed: boolean,
}

export interface TaskInterface {
    task_id: string,
    name: string,
    description: string,
    status: 'active' | 'completed' | 'expired' | 'upcoming',
    tag: string,
    reward: number,
    verification: {
        tags?: string[],
        url_to_redirect: string,
    },
    timestamp_start: string,
    timestamp_end: string | null,
    completed: boolean,
}

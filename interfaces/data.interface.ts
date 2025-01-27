export interface SpinsDataInterface {
    currentSpins: number,
    nextSpins: number | undefined,
    upgradePrice: number | undefined,
    isFinal: boolean,
}

export interface TasksDataInterface {
    tasksRequired: number,
    tasksCount: number,
}

export interface FrensDataInterface {
    totalFrens: number,
    authorizedFrens: number,
}

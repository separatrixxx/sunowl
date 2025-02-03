import { UpgradesInterface } from "../interfaces/upgrades.interface";
import { FrensDataInterface, SpinsDataInterface, TasksDataInterface } from "../interfaces/data.interface";
import { TasksInterface } from "../interfaces/tasks.interface";
import { UserInterface } from "../interfaces/user.interface";


export function getSpinsData(upgrades: UpgradesInterface): SpinsDataInterface {
    const currentSpins = upgrades.data.current_spins;
    const upgradesData = upgrades.data.upgrades;
    
    const levels = Object.entries(upgradesData)
        .filter(([_, upgrade]) => upgrade !== null && typeof upgrade.spins === 'number')
        .map(([level, upgrade]) => ({
            level: parseInt(level.replace('level_', ''), 10),
            ...upgrade
        }))
        .sort((a, b) => a.spins - b.spins).filter(l => l.available);
    
    const isFinal = levels.length === 0;
    const nextSpins = levels[0].spins;
    const tonPrice = levels[0].ton_price;
    const starsPrice = levels[0].price;

    return {
        currentSpins,
        nextSpins,
        tonPrice,
        starsPrice,
        isFinal,
    };
}

export function getTasksData(tasks: TasksInterface): TasksDataInterface {
    const tesksCompleted = tasks.data.statistics.total_completed;
    const tasksRequired = tasks.task_delimeter;
    const tasksCount = tesksCompleted % tasksRequired;

    return {
        tasksRequired,
        tasksCount: (tasksCount === 0 && tesksCompleted) ? tasksRequired : tasksCount,
    };
}

export function getFrensData(user: UserInterface): FrensDataInterface {
    const totalFrens = user.data.statistics.total_friends;
    const authorizedFrens = user.data.statistics.authorized_friends;

    return {
        totalFrens,
        authorizedFrens,
    };
}

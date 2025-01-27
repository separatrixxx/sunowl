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
        .sort((a, b) => a.spins - b.spins);
    
    const currentLevelIndex = levels.findIndex(level => level.spins === currentSpins);
    const isFinal = currentLevelIndex === levels.length - 1;
    const nextSpins = isFinal || currentLevelIndex === -1 ? undefined : levels[currentLevelIndex + 1]?.spins ?? null;
    const upgradePrice = isFinal || currentLevelIndex === -1 ? undefined : levels[currentLevelIndex + 1]?.price ?? null;

    return {
        currentSpins,
        nextSpins,
        upgradePrice,
        isFinal,
    };
}

export function getTasksData(tasks: TasksInterface): TasksDataInterface {
    const tasksCompleted = Object.values(tasks.data.claim_tasks.groups)
        .reduce((total, group) => total + group.completed_count, 0);

    const tasksRequired = 15;
    const tasksCount = tasksCompleted % tasksRequired;

    return {
        tasksRequired,
        tasksCount,
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

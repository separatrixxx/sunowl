import { createSlice } from '@reduxjs/toolkit';
import { TasksInterface } from '../../interfaces/tasks.interface';


const tasksData: TasksInterface = {
    status: '',
    task_delimeter: 0,
    data: {
        event_tasks: {
            active: [],
            completed: [],
        },
        raid_tasks: {
            active: [],
            completed: [],
            missed: [],
        },
        claim_tasks: {
            groups: {},
        },
        statistics: {
            completed_by_type: {
                event: 0,
                raid: 0,
                claim: 0,
            },
            total_completed: 0,
        },
    },
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: tasksData,
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        setTasksDefault: (state) => {
            state.tasks = tasksData
        },
    },
});

export const { setTasks, setTasksDefault } = tasksSlice.actions;

export default tasksSlice.reducer;

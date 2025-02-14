import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSlice from "../user/userSlice";
import poolSlice from "../pool/poolSlice";
import firstVisitSlice from "../firstVisit/firstVisitSlice";
import refreshSlice from "../refresh/refreshSlice";
import tasksSlice from "../tasks/tasksSlice";
import upgradesSlice from "../upgrades/upgradesSlice";


const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice,
      pool: poolSlice,
      firstVisit: firstVisitSlice,
      refresh: refreshSlice,
      tasks: tasksSlice,
      upgrades: upgradesSlice,
    },
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
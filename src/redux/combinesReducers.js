import { DepartmentsReducer } from "./departmentsReducer";
import { StaffsReducer } from './staffsReducer';
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    departments: DepartmentsReducer,
    staffs: StaffsReducer
})

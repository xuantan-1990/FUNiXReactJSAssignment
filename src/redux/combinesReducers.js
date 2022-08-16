import { DepartmentsReducer } from "./departmentsReducer";
import { StaffsReducer } from './staffsReducer';
import { SalarysReducer } from './salaryReducer';
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    departments: DepartmentsReducer,
    staffs: StaffsReducer,
    salarys: SalarysReducer
})

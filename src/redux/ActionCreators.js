import * as ActionTypes from './ActionTypes';

export const addStaff = (
  name,
  salaryScale,
  annualLeave,
  overTime,
  doB,
  startDate,
  department,
  image
) => ({
  type: ActionTypes.ADD_STAFF,
  payload: {
    name,
    salaryScale,
    annualLeave,
    overTime,
    doB,
    startDate,
    department,
    image
  },
});

export const addDepartment = (id, name, numberOfStaff) => ({
  type: ActionTypes.ADD_DEPARTMENT,
  payload: {
    id,
    name,
    numberOfStaff,
  },
});
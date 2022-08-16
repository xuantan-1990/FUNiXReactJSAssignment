import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addStaff = ( staff ) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff
});

export const postStaff =
  (name, salaryScale, annualLeave, overTime, doB, startDate, departmentId, image) => (dispatch) => {
    const newStaff =
      { name, salaryScale, annualLeave, overTime, doB, startDate, departmentId, image }
    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((response) => dispatch(addStaff(response)));
  };

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true))
  return (
    fetch(baseUrl + "staffs")
      .then((response) => response.json())
      .then((staffs) => dispatch(addStaffs(staffs)))
  );
}

export const staffsLoading = () => ({
  type:ActionTypes.STAFFS_LOADING
})

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs
});

export const fetchDeparts = () => dispatch => {
  dispatch(departsLoading(true))
  return (
    fetch(baseUrl + 'departments')
      .then(res => res.json())
    .then(departs => dispatch(addDeparts(departs)))
  )
}

export const departsLoading = () => ({
  type: ActionTypes.DEPARTS_LOADING
})

export const departsFailed = (errmess) => ({
  type: ActionTypes.DEPARTS_FAILED,
  payload: errmess
})

export const addDeparts = (departs) => ({
  type: ActionTypes.ADD_DEPARTS,
  payload: departs
})

export const fetchSalarys = () => (dispatch) => {
  dispatch(salarysLoading(true))
  return fetch(baseUrl + "staffsSalary")
    .then(res => res.json())
  .then(salarys => dispatch(addSalarys(salarys)))
}

export const salarysLoading = () => ({
  type: ActionTypes.SALARYS_LOADING
})

export const addSalarys = (salarys) => ({
  type: ActionTypes.ADD_SALARYS,
  payload: salarys
})

export const salarysFailed = (errmess) => ({
  type: ActionTypes.SALARYS_FAILED,
  payload: errmess
})
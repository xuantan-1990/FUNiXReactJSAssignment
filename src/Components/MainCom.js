import React, {Component} from "react";
import Header from "./HeaderCom";
import Footer from "./FooterCom";
import Staffs from './StaffsCom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import StaffDetail from "./StaffDetailCom";
import DepartDetail from './DepartDetailCom';
import Departments from "./DepartmentCom";
import Salary from "./SalaryCom";
import { connect } from 'react-redux';
import { postStaff, fetchStaffs, fetchDeparts, fetchSalarys } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salarys: state.salarys
  };
}

const mapDispatchToProps = (dispatch) => ({
  postStaff: (
    name,
    salaryScale,
    annualLeave,
    overTime,
    doB,
    startDate,
    departmentId,
    image
  ) =>
    dispatch(
      postStaff(
        name,
        salaryScale,
        annualLeave,
        overTime,
        doB,
        startDate,
        departmentId,
        image
      )
    ),
  fetchStaffs: () => { dispatch(fetchStaffs()) },
  fetchDeparts: () => { dispatch(fetchDeparts()) },
  fetchSalarys: () => { dispatch(fetchSalarys()) },
})

class Main extends Component {

  componentDidMount() {
    this.props.fetchStaffs()
    this.props.fetchDeparts()
    this.props.fetchSalarys()
  }

  render() {
    const StaffWithId = ({ match }) => {

    return (
      <StaffDetail
        nhanvien={
          this.props.staffs.staffs.filter(
            (staff) => staff.id === parseInt(match.params.staffId, 10)
          )[0]
        }
        isLoading={this.props.staffs.isLoading}
        errMess={this.props.staffs.errMess}
      />
    );
    }
    
    const DepartWithId = ({ match }) => {
      
    return (
      <DepartDetail
        staffs={
          this.props.staffs.staffs.filter(
            (staff) => staff.departmentId === match.params.departmentId
          )
        }
        isLoading={this.props.staffs.isLoading}
        errMess={this.props.staffs.errMess}
      />
    );
      }
      
  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/bangluong"
          component={() => (
            <Salary
              salarys={this.props.salarys.salarys}
              salarysIsLoading={this.props.salarys.isLoading}
              salarysErrMess={this.props.salarys.errMess}
            />
          )}
        />
        <Route
          exact
          path="/nhanvien"
          component={() => (
            <Staffs
              staffs={this.props.staffs.staffs}
              postStaff={this.props.postStaff}
            />
          )}
        />
        <Route path="/nhanvien/:staffId" component={StaffWithId} />
        <Route
          exact
          path="/phongban"
          component={() => (
            <Departments
              departments={this.props.departments.departs}
              departsIsLoading={this.props.departments.isLoading}
              departsErrMess={this.props.departments.errMess}
            />
          )}
        />
        <Route
          path="/phongban/:departmentId"
          component={DepartWithId} 
        />
        <Redirect to="/nhanvien" />
      </Switch>
      <Footer />
    </div>
  );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

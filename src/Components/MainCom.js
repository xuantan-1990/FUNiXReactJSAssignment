import React, {Component} from "react";
import Header from "./HeaderCom";
import Footer from "./FooterCom";
import Staffs from './StaffsCom';
// import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import StaffDetail from "./StaffDetailCom";
import Departments from "./DepartmentCom";
import Salary from "./SalaryCom";
import { connect } from 'react-redux';
import { addStaff } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addStaff: (
    name,
    salaryScale,
    annualLeave,
    overTime,
    doB,
    startDate,
    department,
    image
  ) =>
    dispatch(
      addStaff(
        name,
        salaryScale,
        annualLeave,
        overTime,
        doB,
        startDate,
        department,
        image
      )
    ),
});

class Main extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
      // staffs: STAFFS,
      // departments: DEPARTMENTS
    // }
    // this.addStaff=this.addStaff.bind(this)
  // }

  // addStaff = (staff) => {
  //   const id = this.props.staffs.length
  //   const newStaff = { id, ...staff }
  //   this.setState({ staffs: [...this.props.staffs, newStaff] })
  //   console.log(newStaff);
  // }

  render() {
    const StaffWithId=({match})=>{
    return (
      <StaffDetail nhanvien={this.props.staffs.filter(staff => 
        staff.id === parseInt(match.params.staffId, 10))[0]
      }/>
  
)
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/bangluong"
          component={() => <Salary luong={this.props.staffs} />}
        />
        <Route
          exact
          path="/nhanvien"
          component={() => (
            <Staffs staffs={this.props.staffs} addStaff={this.props.addStaff} />
          )}
        />
        <Route path="/nhanvien/:staffId" component={StaffWithId} />
        <Route
          path="/phongban"
          component={() => <Departments departments={this.props.departments} />}
        />
        <Redirect to="/nhanvien" />
      </Switch>
      <Footer />
    </div>
  );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

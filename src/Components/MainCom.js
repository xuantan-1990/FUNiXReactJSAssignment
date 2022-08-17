import React, {Component} from "react";
import Header from "./HeaderCom";
import Footer from "./FooterCom";
import Staffs from './StaffsCom';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom'
import StaffDetail from "./StaffDetailCom";
import Departments from "./DepartmentCom";
import Salary from "./SalaryCom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    }
  }
  render() {
    const StaffWithId=({match})=>{
    return (
      <StaffDetail nhanvien={this.state.staffs.filter(staff => 
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
          component={() => <Salary luong={this.state.staffs} />}
        />
        <Route
          exact
          path="/nhanvien"
          component={() => <Staffs staffs={this.state.staffs} />}
        />
        <Route path="/nhanvien/:staffId" component={StaffWithId} />
        <Route
          path="/phongban"
          component={() => <Departments departments={this.state.departments} />}
        />
        <Redirect to='/nhanvien'/>
      </Switch>
      <Footer />
    </div>
  );
  }
  
}

export default Main;

import React, {Component} from "react";
import Header from "./HeaderCom";
import Footer from "./FooterCom";
import Staffs from './StaffsCom';
import { STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect} from 'react-router-dom'
import StaffDetail from "./StaffDetailCom";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
     
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
          exact
          path="/nhanvien"
          component={() => <Staffs staffs={this.state.staffs} />}
        />
        <Route path="/nhanvien/:staffId" component={StaffWithId} />
        
      </Switch>
      <Footer />
    </div>
  );
  }
  
}

export default Main;

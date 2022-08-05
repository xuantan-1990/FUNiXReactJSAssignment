import React from "react";
import Header from "./HeaderCom";
import Footer from "./FooterCom";
import Staffs from './StaffsCom';
import { STAFFS } from '../shared/staffs';
import { Switch, Route} from 'react-router-dom'

function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/nhanvien" component={()=><Staffs staffs={STAFFS} />}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;

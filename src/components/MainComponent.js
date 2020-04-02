import React, { Component } from "react";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import SignUp from "./SignUpComponent";
import About from "./AboutComponent";
import {AGENCES} from "./agences";
import { Switch, Route, Redirect } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route exact path="/projectsMenu" component={() => <Menu />} />
        <Route exact path="/contactus" component={Contact} />} />
        <Route exact path="/signUp" component={SignUp} />} />
        <Route path="/about" component={() => <About agences={AGENCES} />} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

import React, { Component } from "react";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import SignUp from "./SignUpComponent";
import About from "./AboutComponent";
import { AGENCES } from "./agences";
import { Switch, Route, Redirect } from "react-router-dom";
import Formulaire from "./Formulaire";
import Formulaire2 from "./Formulaire2";
import Phase0 from "./Phase0";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route exact path="/projectsMenu" component={() => <Menu />} />
        <Route exact path="/contactus" component={Contact} />} />
        <Route exact path="/signUp" component={SignUp} />} />
        <Route exact path="/depot" component={() => <Formulaire2 />} />
        <Route path="/about" component={() => <About agences={AGENCES} />} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

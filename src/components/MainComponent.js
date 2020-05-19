import React, { Component } from "react";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import SignUp from "./SignUpComponent";
import About from "./AboutComponent";
import { AGENCES } from "./agences";
import { Switch, Route, Redirect } from "react-router-dom";
import EspaceCP from "./EspaceCP";
import Phase0 from "./Phase0";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";
import Phase5 from "./Phase5";
import EspaceAdmin from "./EspaceAdmin";

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
        <Route exact path="/depot" component={() => <Phase0 />} />
        <Route exact path="/depotPhase1" component={() => <Phase1 />} />
        <Route exact path="/depotPhase2" component={() => <Phase2 />} />
        <Route exact path="/depotPhase3" component={() => <Phase3 />} />
        <Route exact path="/depotPhase4" component={() => <Phase4 />} />
        <Route exact path="/depotPhase5" component={() => <Phase5 />} />
        <Route path="/about" component={() => <About agences={AGENCES} />} />
        <Route exact path="/espaceChargéPrésélection" component={EspaceCP} />} />
        <Route exact path="/espacePersonnelCD" component={SignUp} />} />
        <Route exact path="/espacePersonnel" component={SignUp} />} />
        <Route exact path="/espaceAdmin" component={SignUp} />} />

        <Redirect to="/home" />
      </Switch>
    );
  }
}

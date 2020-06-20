import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import DomaineList from "./DomaineList";
import Domaine from "./Domaine";
import UserList from "./UserList";
import Utilisateur from "./Utilisateur";
import UtilisateurList from "./UtilisateurList";

import ConditionList from "./ConditionList";
import Condition from "./Condition";
import store from "../service/store";
import { Provider } from "react-redux";

import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route path="/" exact component={() => <Welcome />} />
      <Route path="/add" exact component={Domaine} />
      <Route path="/edit/:id" exact component={Domaine} />
      <Route path="/list" exact component={DomaineList} />
      <Route path="/addcondition" exact component={Condition} />
      <Route path="/editcondition/:id" exact component={Condition} />
      <Route path="/conditionlist" exact component={ConditionList} />
      <Route path="/addUser" exact component={Utilisateur} />
      <Route path="/userList" exact component={UtilisateurList} />

      <Route
        path="/users"
        exact
        component={() => (
          <Provider store={store}>
            <UserList />
          </Provider>
        )}
      />

      <Route exact path="/about" component={() => "About"} />
      <Route exact path="/Pages" component={() => "Pages"} />
      <Route exact path="/faq" component={() => "FAQ"} />
      <Route exact path="/contact" component={() => "Contact"} />
      <Route exact path="/Home-1" component={() => "Home-1"} />
      <Route exact path="/Home-2" component={() => "Home-"} />
      <Route exact path="/Home-3" component={() => "Homee"} />
      <Route exact path="/Page-1" component={() => "Page-1"} />
      <Route exact path="/Page-2" component={() => "Page-2"} />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
      <Route exact path="/page-4" component={() => "page-4"} />
    </Switch>
  </Container>
);

export default Content;

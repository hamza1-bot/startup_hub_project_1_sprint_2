import { Route, Switch } from "react-router";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import UserList from "../components/Users/List/UsersList";

const routing = (
  
  <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/user_list" exact component={UserList} />
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
  </Switch>
);

export default routing;
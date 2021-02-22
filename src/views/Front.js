import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Switch, Route } from "react-router-dom";
import FrontNavBar from "../components/Navbars/FrontNavBar";

export default function Front() {
  return (
    <div>
      <FrontNavBar/>
      <Switch>
        <Route path="/login" render={(props) => <LoginForm {...props} />} />
        <Route
          path="/register"
          render={(props) => <RegisterForm {...props} />}
        />
      </Switch>{" "}
    </div>
  );
}

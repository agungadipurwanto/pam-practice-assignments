import React, { Fragment } from "react";
import { Switch, Route } from "react-router";

import "./Dashboard.module.css";

import Header from "../../Header";
import Footer from "../../Footer";
import SideMenu from "../../SideMenu";
import NotFound from "../NotFound";
import Home from "../Home";
import Users from "../Users";

function Dashboard() {
  return (
    <Fragment>
      <Header />
      <main role="main" className="flex-shrink-0">
        <div className="container-fluid h-100">
          <div className="row py-3 h-100">
            <div className="col-md-3">
              <SideMenu />
            </div>
            <div className="col-md-9">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={Users} />
                    <Route path="/" component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Dashboard;

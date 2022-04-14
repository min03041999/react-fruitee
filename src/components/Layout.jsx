import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "../routes/Routes";

function LayOut(props) {
  return (
    <Router>
      <Route
        render={(props) => (
          <div>
            <div className="container">
              <Header {...props} />
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
          </div>
        )}
      />
    </Router>
  );
}

export default LayOut;

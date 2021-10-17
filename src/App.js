import { Link, Route, HashRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import employee from "./pages/employee";
import list from "./pages/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  btnFn() {
    this.props.history.push("/employee");
  }
  btnFn1() {
    this.props.history.push("/list");
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <div  style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ border: "solid", width: "80px", height: "40px" }}>
                <Link to="/list">list</Link>
              </div>
              <div style={{ border: "solid", width: "80px", height: "40px" }}>
                <Link to="/employee">employee</Link>
              </div>
            </div>
            <div>
              <Route path={"/list"} component={list}></Route>
              <Route path={"/employee"} component={employee}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

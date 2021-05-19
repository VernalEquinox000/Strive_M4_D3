import React from "react";
import SingleBook from "./components/SingleBook"
import MyBadge from "./components/MyBadge"

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";

class App extends React.Component {
  render() {
    return (
      <>
        <WarningSign text="fucchi" variant="danger" />
        <MyBadge text="cazzo" variant="secondary"/>
       <SingleBook />
      </>
    );
  }
}

export default App;
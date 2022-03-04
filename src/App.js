import React from "react";
import Riwayat from "./pages/riwayatmurid";
import Mutasi from "./pages/Mutasi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Riwayat} />
          <Route path="/mutasi" component={Mutasi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

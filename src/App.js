import React from "react";
import Riwayat from "./pages/riwayatmurid";
import Mutasi from "./pages/Mutasi";
import ajel from "./pages/ajel";
import Ajel2 from "./components/ajel2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Riwayat} />
          <Route path="/mutasi" component={Mutasi} />
          <Route path="/ajel" component={ajel} />
          <Route path="/ajel2" component={Ajel2} />
        </Switch>
        {/* <Ajel2 /> */}
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Riwayat from "./pages/riwayatmurid";
import Mutasi from "./pages/Mutasi";
import Fasilitas from "./pages/Fasilitas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Riwayat} />
          <Route path="/mutasi" component={Mutasi} />
          <Route path="/test" component={Fasilitas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

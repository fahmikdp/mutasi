import React from "react";
import Riwayat from "./pages/riwayatmurid";
import Mutasi from "./pages/Mutasi";
import Fasilitas from "./pages/Fasilitas";
import Fasilitas2 from "./pages/Fasilitas2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Riwayat} />
          <Route path="/mutasi" component={Mutasi} />
          <Route path="/fasilitas" component={Fasilitas} />
          <Route path="/fasilitas2" component={Fasilitas2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

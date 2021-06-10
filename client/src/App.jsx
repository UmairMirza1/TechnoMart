import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import SideBar from "./components/layout/SideBar";
function App() {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;

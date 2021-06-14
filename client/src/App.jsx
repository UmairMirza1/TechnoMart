import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import ProductType from "./components/product/ProductType";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/ProductType" component={ProductType} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

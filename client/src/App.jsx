import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Category from "./components/product/Category";
import SingleProduct from "./components/product/SingleProduct";
import Search from "./components/product/Search";
import Cart from "./components/product/Cart";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Category/:category" component={Category} />
          <Route exact path="/Product/:id" component={SingleProduct} />
          <Route exact path="/Search/:term" component={Search} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

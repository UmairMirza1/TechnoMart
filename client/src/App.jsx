import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Category from "./components/product/Category";
import SingleProduct from "./components/product/SingleProduct";
import Search from "./components/product/Search";
import Order from "./components/order/Order";
import Payment from "./components/order/Payment";

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
          <Route exact path="/Order" component={Order} />
          <Route exact path="/Payment" component={Payment} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

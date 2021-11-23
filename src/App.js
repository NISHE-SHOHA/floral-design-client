import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/Booking/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import AddService from './components/AddService/AddService';
import ManageServices from './components/ManageServices/ManageServices';
import OrderPlace from './components/OrderPlace/OrderPlace';
import About from './components/About/About';
import Delivery from './components/Delivery/Delivery';
import Orders from './components/Orders/Orders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
           <Booking></Booking>
          </PrivateRoute>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/orderPlace">
            <OrderPlace></OrderPlace>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/delivery">
            <Delivery></Delivery>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

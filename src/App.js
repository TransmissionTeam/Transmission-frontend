import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">

          <Home />

          </Route >

          <Route exact path="/aboutus">

                <AboutUs/>

          </Route >
          
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

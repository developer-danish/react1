import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Product from './views/Product';
function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <div style={{padding:'5px'}}>
          <Switch>
            <Route exact path="/">
                 <Home />
            </Route>
            <Route path="/about">
                 <About />
            </Route>
            <Route path="/product/:id">
                 <Product />
            </Route>
          </Switch>
          </div>
          <Footer />
       </Router>
    </div>
  );
}

export default App;

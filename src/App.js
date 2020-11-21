import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage/SearchPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

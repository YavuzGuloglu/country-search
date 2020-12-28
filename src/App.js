import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import Country from './components/Country';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route component={CountryList} path='/' exact />
            <Route component={About} path='/About' />
            <Route component={Contact} path='/Contact' />
            <Route component={Country} path='/:name' />
          </Switch>

        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;

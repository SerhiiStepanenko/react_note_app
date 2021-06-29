import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Create from './components/Create';
import Note from './components/Note';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <div className="container pt-4">
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/about' component={About} />
            <Route path='/create' component={Create} />
            <Route exact path='/note' component={Note} />
            <Route exact path='/note/:noteURL' component={Note} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

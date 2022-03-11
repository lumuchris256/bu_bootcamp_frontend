import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import CategoryList from './pages/Category/CategoryList';
import Category from './pages/Category/Category';
import NewCategory from './pages/Category/NewCategory';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/categories"><CategoryList /></Route>
          <Route path='/category/:categoryid'><Category /></Route>
          <Route path="/newcategory"><NewCategory /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

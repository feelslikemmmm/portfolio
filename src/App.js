import './App.css';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Detail from './components/detail/Detail';
const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/detail" component={Detail} />
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
    </div>
  );
}

export default App;

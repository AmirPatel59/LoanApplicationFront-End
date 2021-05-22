import logo from './logo.svg';
import './App.css';
import LoginLI from './Pages/LoginLI';
import LoginCs from './Pages/LoginCs';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Register from './Component/Register';


function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
       <Route exact path="/" component={LoginCs}></Route>
       <Route  path="/register" component={Register}></Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;

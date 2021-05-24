import logo from './logo.svg';
import './App.css';
import LoginLI from './Pages/LoginLI';
import LoginCs from './Pages/LoginCs';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Register from './Component/Register';
import ViewAllLoan from './Component/ViewAllLoan';



function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
       <Route exact path="/" component={LoginCs}></Route>
       <Route  path="/register" component={Register}></Route>
       <Route  path="/viewAllLoan" component={ViewAllLoan}></Route>
       <Route  path="/LoginIs" component={LoginLI}></Route>

     </Switch>
     </Router>
    </div>
  );
}

export default App;

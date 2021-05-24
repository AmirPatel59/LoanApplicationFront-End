import logo from './logo.svg';
import './App.css';
import LoginLI from './Pages/LoginLI';
import LoginCs from './Pages/LoginCs';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Register from './Component/Register';
<<<<<<< HEAD
import ViewAllLoan from './Component/ViewAllLoan';

=======
import ViewAllLoans from '../src/Component/ViewAllLoans'
import ViewLoan from './Component/ViewLoan';
>>>>>>> 89bc5a2ae6a3cfbd6c3a331100ee1df44196a08f


function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
       <Route exact path="/" component={LoginCs}></Route>
       <Route  path="/register" component={Register}></Route>
<<<<<<< HEAD
       <Route  path="/viewAllLoan" component={ViewAllLoan}></Route>
       <Route  path="/LoginIs" component={LoginLI}></Route>

=======
       <Route  path="/LoginIssuer" component={LoginLI}></Route>
       <Route  path="/viewAllLoans" component={ViewAllLoans}></Route>
       <Route  path="/viewLoan" component={ViewLoan}></Route>
>>>>>>> 89bc5a2ae6a3cfbd6c3a331100ee1df44196a08f
     </Switch>
     </Router>
    </div>
  );
}

export default App;

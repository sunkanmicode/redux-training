import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import {  Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from './pages/login/Login'
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
           <Home />
        </Route>
        <Route exact path='/register'>
           <Register />
        </Route>
        <Route exact path='/login'>
           <Login />
        </Route>
        <Route exact path='/dashboard'>
           <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Live from './Pages/Live/Live';
import Record from './Pages/Record/Record';
import Alarm from './Pages/Alarm/Alarm';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './Pages/Css/Main.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      people: [
        { name: 'admin', password: 'admin', id: 1 }
      ],
      authenticated: false
    }
    this.AuthenticateUser = this.AuthenticateUser.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  AuthenticateUser() {
    this.setState({ authenticated: true })
  }

  Logout = () =>{
    console.log("bura");
    this.setState({ authenticated: false })
    return <Redirect to='/' />
  }
  
  render() {
    if (this.state.authenticated === true) {
      return (
        <BrowserRouter>
          <div className="app">
            <Navbar/>
            <Route exact path='/' component={Live} />
            <Route path='/Live' component={Live} />
            <Route path='/Record' component={Record} />
            <Route path='/Alarm' component={Alarm} />
            <Route path='/Logout' render={this.Logout}/>
          </div>
        </BrowserRouter>
      )
    }

    else {
      return (
        <div className="app">
          <Login action={this.AuthenticateUser}/>
        </div>
      )
    }
  }
}

export default App;

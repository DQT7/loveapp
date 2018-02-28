import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import Home from './components/site/Home';
import AuthModal from './components/site/AuthModals';
import PrivateRoute from './components/site/PrivateRoute';
// import Resources  from './components/site/Resources';
// import Auth  from './components/site/Auth';
// import Splash from './components/site/Splash';
import RLissues from './RTracker/RLissues';
import FDJournal from './RTracker/FDJournal'

import authService from './services/auth-service';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sessionToken: ''
    }
    this.setSessionState = this.setSessionState.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token){
    authService.setToken(token);
    this.setState({sessionToken: token})
  }

  componentWillMount() {
    const token = authService.getToken();
    if (token && !this.state.sessionToken) {
      this.setState({sessionToken: token});
    }
  }

  logout(){
    this.setState({ sessionToken:''});
    authService.removeToken();
  }

  render() {
    return (
      <Router>
        <div className='inTheback'>
          <Header logout={this.logout} />
          <Sidebar />

          <Route path="/AuthModal" exact component={AuthModal}/>

          <PrivateRoute path="/" exact component={Home}/>
          <PrivateRoute path='/FDJournal' exact component={FDJournal}/>
          <PrivateRoute path='/RLissues' exact component={RLissues}/>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


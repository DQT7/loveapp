import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import Home from './components/site/Home';
import AuthModal from './components/site/AuthModals';
import Resources  from './components/site/Resources';
import Auth  from './components/site/Auth';
import Splash from './components/site/Splash';
import RLissue from './RTracker/RLissues'




import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,

} from 'react-router-dom';
import RLissues from './RTracker/RLissues';

class App extends Component {
constructor(){
  super();
  this.state = {
    sessionToken: ''
  }
this.setSessionState = this.setSessionState.bind(this);
this.protectedViews = this.protectedViews.bind(this);
this.logout = this.logout.bind(this);

}

setSessionState(token){
  localStorage.setItem('token',token);
  this.setState({sessionToken: token})
}
componentWillMount() {
  const token = localStorage.getItem('token')
  if(token && !this.state.sessionToken) {
    this.setState({sessionToken:token});
  }
}
logout(){
  this.setState({ setToken:''});
  localStorage.removeItems('token')
}
protectedViews(){
  if(this.state.sessionToken === localStorage.getItem('token')){
    return (
      <Router path='/' exact={true}>
      <Splash sessionToken={this.state.sessionToken} />
    </Router>

    )
  } else{
    return (
      <Router path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Router>
    )
  }
}

  render() {
    return (
      <Router>
      <Switch>
      <div class='inTheback'>
     
        <Header />
      
         
            <div>
            <Sidebar />
            {this.protectedViews()}
            </div>
          
           <Home/>
           <AuthModal setToken={this.setSessionState}/>
           <div>
          <RLissues/>
          {this.protectedViews()}
          </div>
        <Footer />
       
      </div>
      </Switch>
        </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import Home from './components/site/Home';
import AuthModal from './components/site/AuthModals';
import Resources  from './components/site/Resources';
// import Auth  from './components/site/Auth';
import Splash from './components/site/Splash';
import RLissues from './RTracker/RLissues';
import FDJournal from './RTracker/FDJournal'




import {
  BrowserRouter as Router,
 Link,
 Route,
 Switch,

} from 'react-router-dom';


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
    localStorage.removeItem('token')
  }

  protectedViews(){
    if(this.state.sessionToken === localStorage.getItem('token')){
      return (
        <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact={true}>
              <Home/>
            </Route>
            <Route exact={true} path='/FDJournal'>
    
              <FDJournal />
    
            </Route>
    
            <Route exact={true} path='/RLissues'>
              <RLissues/>
            </Route>
          </Switch>
        </div>
        </Router>
      );

    } else {

      return (

        <Route path="/AuthModal" exact={true} >
          
          <AuthModal setToken={this.setSessionState} />
        </Route>
      )
    }
  }

  render() {
    return (
      <Router>
      <div className='inTheback'>
       
          <div>
            <Header logout={this.logout} />
            <div>
              <Sidebar />
            </div>
            <div>
              {this.protectedViews()}
            </div>
            <Footer />
          </div>
        
      </div>
      </Router>
    );
  }
}
  
export default App;
           

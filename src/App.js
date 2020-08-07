import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';
import SignInAndSignUp from './views/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsusbscribeFromAuth = null

  componentDidMount() {
    this.unsusbscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

    })
  }

  componentWillUnmount() {
    this.unsusbscribeFromAuth()
  }
  
  render() {
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
      );
  }
  
}

export default App;

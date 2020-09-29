import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';
import SignInAndSignUp from './views/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './views/checkout/checkout.component';

import Header from './components/header/header.component';
import CurrentUserContext from './contexts/current-user/current-user.context';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsusbscribeFromAuth = null;

  componentDidMount() {

    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }});
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsusbscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header /> 
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact path='/signin' 
            render={() => 
              this.state.currentUser ? (
              <Redirect to='/' />
              ) : (
              <SignInAndSignUp />
              )
            } 
          />
        </Switch>
      </div>
      );
  }
}

export default App;

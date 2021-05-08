import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './MyApp/Redux/store';
import UserList from "./AppModules/UserListModule/View/UserList";
import AppNavigation from "./MyApp/Navigation/navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
           <AppNavigation/>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;

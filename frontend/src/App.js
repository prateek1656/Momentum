import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Contribution from './Pages/contribution';
import Project from './Pages/project/Project';
import { AuthContextProvider, UserAuth } from './contexts/AppFirebaseContext';
import AppProtectedRouteOne from './components/AppProtectedRoutes';
import AppUserSignInModal from './components/userSignInModal';
import { IonReactRouter } from '@ionic/react-router';
import { Switch, Route } from 'react-router-dom';
function App() {
  // let [appUser, setAppUser] = useState('')
  return (
    <AuthContextProvider >
    <div className="App">
    <IonReactRouter>
      {/* <Sidebar /> */}
      {/* <Contribution/> */}
      <Switch>
      <Route exact path="/project">
        <AppProtectedRouteOne>
          <Project/>
        </AppProtectedRouteOne>
      </Route>
      </Switch>
    </IonReactRouter>
    </div>
     </AuthContextProvider>  
  );
}

export default App;

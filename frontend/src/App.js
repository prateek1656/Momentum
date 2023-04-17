import './App.css';
import Contribution from '../src/Pages/Contribution/contribution';
import Project from './Pages/project/Project';
import Feed from '../src/Pages/Feed/feed';
import { AuthContextProvider, UserAuth } from './contexts/AppFirebaseContext';
import AppProtectedRouteOne from './components/AppProtectedRoutes';
import { IonReactRouter } from '@ionic/react-router';
import { Switch, Route } from 'react-router-dom';
import CreateProject from './Pages/Create Project/createProject';

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
      <Route exact path="/contribution">
        <AppProtectedRouteOne>
          <Contribution/>
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/feed">
        <AppProtectedRouteOne>
         <Feed/>
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/createproject">
        <AppProtectedRouteOne>
          <CreateProject/>
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/login">
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

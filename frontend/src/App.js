import './App.css';
import ContributionFeed from '../src/Pages/Contribution Feed/ContributionFeed';
import Contribution from '../src/Pages/Contribution/contribution'
import ProjectFeed from '../src/Pages/Project Feed/projectFeed';
import Project from './Pages/Project/Project';
import Feed from '../src/Pages/Feed/feed';
import { AuthContextProvider, UserAuth } from './contexts/AppFirebaseContext';
import AppProtectedRouteOne from './components/AppProtectedRoutes';
import AppUserSignInModal from './components/userSignInModal';
import { IonReactRouter } from '@ionic/react-router';
import { Switch, Route } from 'react-router-dom';
import CreateProject from './Pages/Create Project/createProject';
import EditProject from './Pages/Edit Project/editProject';
function App() {
  // let [appUser, setAppUser] = useState('')
  return (
    <AuthContextProvider >
    <div className="App">
    <IonReactRouter>
      {/* <Sidebar /> */}
      {/* <Contribution/> */}
      <Switch>
      <Route exact path="/projects">
        <AppProtectedRouteOne>
          <ProjectFeed/>
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/contributions">
        <AppProtectedRouteOne>
          <ContributionFeed/>
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
      <Route exact path="/editproject">
        <AppProtectedRouteOne>
          <EditProject/>
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/login">
        <AppProtectedRouteOne>
         hello
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/project/:project_id">
        <AppProtectedRouteOne>
       <Contribution/>
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/projectDetails">
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

import './App.css';
import Contribution from '../src/Pages/Contribution/contribution';
import ContributionFeed from '../src/Pages/Contribution Feed/ContributionFeed';
import ProjectFeed from '../src/Pages/Project Feed/projectFeed';
import Project from './Pages/project/Project';
import Feed from '../src/Pages/Feed/feed';
import { AuthContextProvider, UserAuth } from './contexts/AppFirebaseContext';
import AppProtectedRouteOne from './components/AppProtectedRoutes';
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
          {/* <Project/> */}
          <ProjectFeed/>
        </AppProtectedRouteOne>
      </Route>
      <Route exact path="/contributions">
        <AppProtectedRouteOne>
          {/* <Contribution/> */}
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
      <Route exact path="/project/:id">
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
      <Route exact path="/create">
        <AppProtectedRouteOne>
          <CreateProject/>
        </AppProtectedRouteOne>
      </Route>
      </Switch>
    </IonReactRouter>
    </div>
     </AuthContextProvider>  
  );
}

export default App;

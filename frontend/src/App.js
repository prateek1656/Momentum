import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Contribution from './Pages/Contribution/contribution';
import Project from './Pages/Project/Project';
import ContributionCard from './Pages/Contributions Card/contributionCard';
import ContributionFeed from './Pages/Contribution Feed/ContributionFeed';
import ProjectFeed from './Pages/Project Feed/projectFeed';
import Feed from './Pages/Feed/feed';
import CreateProject from './Pages/Create Project/createProject';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <Contribution/> */}
      {/* <Project/> */}
      {/* <ContributionCard/> */}
      {/* <ContributionFeed/> */}
      {/* <ProjectFeed/> */}
      {/* <Feed/> */}
      {/* <CreateProject/> */}
      <CreateProject/>
    </div>
  );
}

export default App;

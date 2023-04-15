import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Contribution from './Pages/contribution';
import Project from './Pages/Project';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <Contribution/> */}
      <Project/>
    </div>
  );
}

export default App;

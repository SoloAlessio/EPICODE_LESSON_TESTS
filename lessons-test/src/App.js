import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './components/Welcome/Index'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
    </div>
  );
}

export default App;

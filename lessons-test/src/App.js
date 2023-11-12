import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Welcome from './components/Welcome/Index'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;

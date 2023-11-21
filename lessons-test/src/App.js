import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetail from './components/CardDetail'
import SetDetail from './components/SetDetail'

function App() {
  return (
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Jumbotron />}/>
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/sets/:setsId" element={<SetDetail />} />
        </Routes>

        <Footer />

      </BrowserRouter>
  );
}

export default App;

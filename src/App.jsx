import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import AniRoute from './routes/AniRoute';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <AniRoute/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Ourteam from './Components/Ourteam';
import OurProject from './Components/OurProject';
import OurClients from './Components/OurClients';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Ourteam/>
      <OurProject/>
      <OurClients/>
      <Footer/>
    </div>
  );
}

export default App;

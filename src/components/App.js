import About from './About';
import './App.css';
import Carousel from './Carousel';
import Dodgee from './Dodgee';
import Navbar from './Navbar';
import What from './What';
import Border from './Border';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Border/>
      <What/>
      <Carousel/>
      <Footer/>
      {/* <Dodgee/> */}
    </div>
  );
}

export default App;

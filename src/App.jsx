import './App.css';
import Info from './components/info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;

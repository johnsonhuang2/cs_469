import './App.css';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import background from './pz_bg.jpeg'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    width: "100%",
    height: "100%",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}>
        <div>
          <Navbar/>
          <Router>
              <Routes>
                  <Route path="/" element={<Homepage/>}></Route>
                  <Route path="/about" element={<About/>}></Route>
              </Routes>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;

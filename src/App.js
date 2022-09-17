
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import bg from "../src/images/hero-bg.jpg"
import SharedFooter from './Components/Shared/SharedFooter';
function App() {
  return (
    // <div style={{
    //   "backgroundImage": `url(${bg})`, backgroundSize: "cover", "backdrop-filter": "blur(1000px)"
    // }} className='App' >


    <div style={{ "backgroundColor": "#0b111e" }} className='App overflow-hidden' >
      <Routes>

        <Route path='/' element={<Home></Home>} />

      </Routes>

    </div>
  );
}

export default App;

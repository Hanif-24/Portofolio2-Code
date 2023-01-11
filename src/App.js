import Homepage from "./Page/Home/Homepage";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Library from "./Page/Library/Library";
import EditProfile from "./Page/EditProfile/EditProfile";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/planet-list" element={<Library/>} />
        <Route exact path="/edit" element={<EditProfile/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

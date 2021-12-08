import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="app__container--main">
        <Routes>
          <Route path="/cinebucket/" element={<Home />}></Route>
          <Route exact path="/cinebucket/:id" element={<SingleMovie />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import Explore from "./components/Explore";
import Error from "./components/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app__container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/toprated" element={<TopRated />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

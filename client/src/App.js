import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/homepage/Home";
import Socials from "./components/socials/Socials";
import Shop from "./components/shop/Shop";
import WorkWithMe from "./components/collabs/WorkWithMe";

function App() {

  useEffect(() => {
    // fetch("/hello")
    //   .then((r) => r.json())
    //   .then((data) => setCount(data.count));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Cowboy's Corral</h1>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/social" element={<Socials />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collabs" element={<WorkWithMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
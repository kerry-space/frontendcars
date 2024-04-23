
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./component/PageWrapper.jsx"
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import CarForm from "./component/carComponent/CarApp.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <PageWrapper>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/carCollection" element={<CarForm />} />

            </Routes>
          </PageWrapper>
        </Router>
      </div>
    </div>
  );
}

export default App;

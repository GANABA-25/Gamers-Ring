import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Ps3Games from "./pages/ps3/Ps3Games";
import Ps4Games from "./pages/ps4/Ps4Games";
import Ps5Games from "./pages/ps5/Ps5Games";
import Downloads from "./pages/downloads/Downloads";
import SearchResultPage from "./pages/SearchResultPage";
import "./fonts/Font.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Ps3Games" element={<Ps3Games />} />
          <Route path="/Ps4Games" element={<Ps4Games />} />
          <Route path="/Ps5Games" element={<Ps5Games />} />
          <Route path="/Downloads" element={<Downloads />} />
          <Route path="/SearchResultPage" element={<SearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

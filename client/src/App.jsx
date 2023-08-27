import { BrowserRouter, Routes, Route } from "react-router-dom";
import HouseSubmittion from "./Pages/HouseSubmittion";
import "./App.css";
import HouseDetail from "./Pages/HouseDetail";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HouseSubmittion />} />
          <Route path="/house/:id" element={<HouseDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

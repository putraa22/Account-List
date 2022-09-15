import Home from "../src/components/home/home";
import DetailCard from "./components/DetailCard/DetailCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

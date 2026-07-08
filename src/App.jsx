import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<Watch />} />
    </Routes>
  );
}

export default App;
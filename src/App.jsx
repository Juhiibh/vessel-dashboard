import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ITPage from "./pages/ITPage";
import IoTPage from "./pages/IoTPage";
import OTPage from "./pages/OTPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/it" element={<ITPage />} />
      <Route path="/iot" element={<IoTPage />} />
      <Route path="/ot" element={<OTPage />} />
    </Routes>
  );
}

export default App;

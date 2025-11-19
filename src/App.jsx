import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Colections from "./pages/colections";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Colections />} />
      </Routes>
    </div>
  );
}

export default App;
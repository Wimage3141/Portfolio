import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CodexPlayground from "./pages/CodexPlayground";
import Home from "./pages/Home";
import MatterPlayground from "./pages/MatterPlayground";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/matter" element={<MatterPlayground />} />
        <Route path="/codex" element={<CodexPlayground />} />
      </Route>
    </Routes>
  );
}

export default App;

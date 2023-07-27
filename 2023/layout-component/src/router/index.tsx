import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../container";
import Responsive from "../pages/Responsive";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/responsive" element={<Responsive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

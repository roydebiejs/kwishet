import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LearnMore from "../pages/LearnMore";

export default function Router() {
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </BrowserRouter>
    );
  };
  return <BrowserRoutes />;
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LearnMore from "../pages/LearnMore";
import JoinKwis from "../pages/JoinKwis";

export default function Router() {
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/join-kwis" element={<JoinKwis />} />
        </Routes>
      </BrowserRouter>
    );
  };
  return <BrowserRoutes />;
}

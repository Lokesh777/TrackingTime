import { Route, Routes } from "react-router-dom";
import TimeCards from "../Features/TimeCards";
import TimeSheets from "../Features/TimeSheet";
import TimeTracker from "../Features/TimeTrackers";
import Blog from "./Blog";
import HomeLandingPage from "./Home";
import Integrations from "./Integrations";
import Login from "./Login";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cards" element={<TimeCards />} />
      <Route path="/tracker" element={<TimeTracker />} />
      <Route path="/timesheet" element={<TimeSheets />} />
     
    </Routes>
  );
}

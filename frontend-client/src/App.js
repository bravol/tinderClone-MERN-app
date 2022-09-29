import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Onboard from "./Components/Onboard/Onboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;
  return (
    //BEM class naming convention
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken && <Route path="/onboard" element={<Onboard />} />}
      </Routes>
    </Router>
  );
}

export default App;

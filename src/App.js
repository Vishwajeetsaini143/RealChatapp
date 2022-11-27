import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import Otp from "./components/Otp";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log("user", currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/register" />;
    } else {
      return <Outlet />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
       
        </Routes>
      </BrowserRouter>
      {/* <Otp/> */}
    </div>
  );
}

export default App;

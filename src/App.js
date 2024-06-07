import "./App.css";

// Importing React Router Dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// Toast Config
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UpdateProduct from "./pages/admin/update product/UpdateProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Add a new route for the profile page */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

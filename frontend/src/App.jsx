import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Upload from "./pages/upload";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-3xl font-bold text-center mt-10">
              Welcome to Excel Analytics
            </h1>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        

      </Routes>
      <Footer/>
    </>
  );
}

export default App;

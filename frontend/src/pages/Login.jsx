import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-4">
        {["Email", "Password"].map((el) => {
          return (
            <div key={el}>
              <label className="block text-sm font-medium mb-1">{el}</label>
              <input
                type={el.toLowerCase()}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder={`Enter your ${el}`}
              />
              {/* <div className="text-red-500 text-sm mt-1">
                Error message here
              </div>
              <div className="text-green-500 text-sm mt-1">
                Success message here
              </div> */}
            </div>
          );
        })}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"  
        >
          Login 
        </button>
        <div className="text-center text-sm mt-2">
          Don't have an account?{" "} 
          <Link to="/register" className="text-blue-500">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

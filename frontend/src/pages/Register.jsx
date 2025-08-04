import React from "react";

const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form className="space-y-4">
        {["Name","Email", "Password"].map((el) => {
          return (
            <div key={el}>
              <label className="block text-sm  font-medium mb-1">{el}</label>
              <input
                type={el.toLowerCase()=="name"?"text" : el.toLowerCase()}
                className="w-full p-2 border border-gray-300 rounded "
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
          Register  
        </button>
        <div className="text-center text-sm mt-2">  
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;

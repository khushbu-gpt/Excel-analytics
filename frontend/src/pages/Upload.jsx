import React from "react";
import { CloudUpload } from "lucide-react";
const Upload = () => {
  return (
    <div className="bg-gray-100 max-w-md my-20 h-96 shadow-lg rounded-md mx-auto justify-center flex items-center text-center">
      <div>
        <button className="cursor-pointer text-blue-400">
          {" "}
          <CloudUpload />
        </button>
        <p>Upload from here</p>
      </div>
    </div>
  );
};

export default Upload;

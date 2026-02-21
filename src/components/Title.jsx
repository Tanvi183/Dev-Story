import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {children}
      </h1>
    </div>
  );
};

export default Title;

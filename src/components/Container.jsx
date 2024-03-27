import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <div className="px-6 md:px-14  lg:px-20 py-1 lg:py-3">{children}</div>
    </div>
  );
};

export default Container;

import React from "react";

const Header = ({ title }) => {
  return (
    <div className="h-[130px] md:h-[180px] lg:h-[220px] mt-[4px] -z-10 w-full bg-primary-foreground flex items-center justify-center">
      <h2 className="font-medium text-[32px]">{title}</h2>
    </div>
  );
};

export default Header;

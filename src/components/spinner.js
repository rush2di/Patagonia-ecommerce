import React from "react";

const Spinner = ({ isFallback = false }) => {
  const stylingLogic = isFallback ? "spinner--fallback" : "spinner--block";
  return (
    <div className={stylingLogic}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;

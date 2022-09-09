import React from "react";
import "./LoadingIndicator.css";

const LoadingIndicator = () => {
  return (
    <div className="loading">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="loading-txt">Loading!</div>
    </div>
  );
};

export default LoadingIndicator;

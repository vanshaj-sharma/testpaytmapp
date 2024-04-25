import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div>
      Transaction Successful! Click <Link to={"/dashboard"}>here</Link> to
      return to dashboard
    </div>
  );
};

export default Success;

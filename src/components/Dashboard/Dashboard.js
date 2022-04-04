import React from "react";
import Areachart from "../Charts/Areachart";
import Lchart from "../Charts/Lchart";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Areachart></Areachart>
      </div>
      <div>
        <Lchart></Lchart>
      </div>
    </div>
  );
};

export default Dashboard;

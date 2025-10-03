import React from "react";
import CountUp from "react-countup";

const Expreance = () => {
  return (
    <div className="flex items-center max-w-4xl mx-5 md:mx-auto justify-between mb-12">
      <div className="flex flex-col items-center">
        <CountUp
          start={0}
          end={10}
          duration={1.5}
          className="text-4xl font-bold text-blue-500"
        />
        <span className="text-xl font-semibold mt-1">Projects</span>
      </div>

      <div className="flex flex-col items-center">
        <CountUp
          start={0}
          end={0}
          duration={1}
          className="text-4xl font-bold text-blue-500"
        />
        <span className="text-xl font-semibold mt-1">Clients</span>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blue-500">1</h2>
        <span className="text-xl font-semibold mt-1">Years Experience</span>
      </div>
    </div>
  );
};

export default Expreance;

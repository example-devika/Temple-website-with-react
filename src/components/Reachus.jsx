import React from "react";

const Reachus = () => {
  return (
    <div>
      <div className="Reachus">
        <h2>ReachUs:</h2>
        <div className="bus">
          <h3>Bus:</h3>
          <p>Hyderabad: 110km, Direct Bus from MGBS</p>
          <p>Mahabubnagar: 60km, Direct Bus </p>
          <p>Tandur: 20km, Direct Bus</p>
          <p>Gulbarga: 100km Direct Bus</p>
        </div>
        <div className="train">
          <h3>Train:</h3>
          <p>Nearest train station</p>
          <p>Tandur: (20km) Buses available every 20mins</p>
          <p>Mahabubnagar: Buses available every 20mins (60km)</p>
        </div>
      </div>
    </div>
  );
};

export default Reachus;

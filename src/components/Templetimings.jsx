import React from "react";

const Templetimings = () => {
  return (
    <div className="templet">
      <h2 className="theading">Daily Temple timings:</h2>
      <ul className="timings">
        <li>5am to 6am - Temple open</li>
        <li>6am to 6.30am - suprabhatam</li>
        <li>6.30am to 8.30am - sarvadharshanam</li>
        <li>8.30am to 8.45am - Thomala seva</li>
        <li>8.45am to 9.15am - Shastra Nama Archana(Tulasi Archana)</li>
        <li>9:15am to 10:30am - Ganta </li>
        <li>10:30am to 11:45am - Sarvadharshanam </li>
        <li>11:45am to 12:00pm - Tulasi Archana & Ganta </li>
        <li>12:15pm - Temple close</li>
        <li>2:00pm - Temple open</li>
        <li>2:00pm to 6:00pm - Sarvadharshanam</li>
        <li>6:00pm to 6:30pm - Thomala Seva & Tulasi Archana</li>
        <li>6:30pm to 7:00pm - Ganta </li>
        <li>7:00pm to 8:00pm - Sarvadharshanam</li>
        <li>8:00pm to 8:30pm - Ekantha Seva</li>
        <li>8:30pm - Temple Close</li>
      </ul>
    </div>
  );
};

export default Templetimings;

import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <h2 className="title">TOUR PLANS</h2>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;

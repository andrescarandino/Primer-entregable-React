import React from 'react';

const Card = ({motos}) => {
  return (
    <div>
    {motos.map((moto, index) => (
      <div key={index} className="card">
        <h3>{moto.marca} {moto.modelo} {moto.cilindrada} {moto.anio}</h3>
      </div>
    ))}
  </div>
  )
};


export default Card;

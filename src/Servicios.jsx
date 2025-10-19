import React from "react";

// Array de habitaciones
const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Deluxe",
    descripcion: "Cama king size, vista al mar, aire acondicionado.",
    precio: "$200/noche",
    imagen: "https://via.placeholder.com/300x200?text=Habitacion+Deluxe"
  },
  {
    id: 2,
    nombre: "Habitación Standard",
    descripcion: "Cama queen, baño privado, TV por cable.",
    precio: "$120/noche",
    imagen: "https://via.placeholder.com/300x200?text=Habitacion+Standard"
  },
  {
    id: 3,
    nombre: "Suite Familiar",
    descripcion: "2 habitaciones, sala de estar, balcón.",
    precio: "$250/noche",
    imagen: "https://via.placeholder.com/300x200?text=Suite+Familiar"
  }
];

const Servicios = () => {
  return (
    <div>
      <h1>Servicios - Habitaciones</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {habitaciones.map((hab) => (
          <div key={hab.id} style={{ border: "1px solid #ccc", padding: "10px", width: "300px", background: "#fff" }}>
            <img src={hab.imagen} alt={hab.nombre} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3>{hab.nombre}</h3>
            <p>{hab.descripcion}</p>
            <p><strong>{hab.precio}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;

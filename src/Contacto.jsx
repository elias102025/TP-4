import React, { useState } from "react";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos envío
    setStatus("Correo enviado correctamente ✅");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
      <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: "300px" }}>
        <h1>Contacto</h1>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        ></textarea>
        <button type="submit">Enviar</button>
        {status && <p>{status}</p>}
      </form>

      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2>Ubicación</h2>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0869235866337!2d-122.42177868468154!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5dce3b3f%3A0x8b9f4c2e0c0a0a0a!2sSan+Francisco%2C+CA!5e0!3m2!1ses!2sar!4v1600000000000!5m2!1ses!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;

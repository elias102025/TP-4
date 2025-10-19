import { useState } from "react";

const SubirImagen = () => {
  const [imagen, setImagen] = useState(null);

  const handleChange = (e) => {
    setImagen(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} accept="image/*" />
      {imagen && <p>Imagen seleccionada: {imagen.name}</p>}
    </div>
  );
};

export default SubirImagen;

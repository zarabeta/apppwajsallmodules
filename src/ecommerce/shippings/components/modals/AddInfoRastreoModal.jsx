// AddProductoShowModal.jsx

import React, { useState } from 'react';

const AddInfoRastreoShowModal = ({ onClose }) => {
  const [NumeroGuia, setNumeroGuia] = useState('');
  const [NombreRepartidor, setNombreRepartidor] = useState('');
  const [Alias, setAlias] = useState('');

  // Lógica para manejar cambios en los campos y enviar datos al servidor

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <h2>Agregar Info. Envío</h2>
      <input
        type="text"
        placeholder="Tipo de estatus"
        value={NumeroGuia}
        onChange={(e) => setNumeroGuia(e.target.value)}
      />
      <input
        type="text"
        placeholder="NombreRepartidor"
        value={NombreRepartidor}
        onChange={(e) => setNombreRepartidor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Alias"
        value={Alias}
        onChange={(e) => setAlias(e.target.value)}
      />
      <button>Guardar</button>
    </div>
  );
};

export default AddInfoRastreoShowModal;

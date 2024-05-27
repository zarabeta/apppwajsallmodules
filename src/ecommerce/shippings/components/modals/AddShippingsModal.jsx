// AddShippingShowModal.jsx

import React, { useState } from 'react';

const AddShippingShowModal = ({ onClose }) => {
  const [addressId, setAddressId] = useState('');
  const [repartidorId, setRepartidorId] = useState('');
  const [metodoEnvio, setMetodoEnvio] = useState('');
  const [costoEnvio, setCostoEnvio] = useState('');

  // Lógica para manejar cambios en los campos y enviar datos al servidor

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <h2>Agregar Envío</h2>
      <input
        type="text"
        placeholder="Address ID"
        value={addressId}
        onChange={(e) => setAddressId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Repartidor ID"
        value={repartidorId}
        onChange={(e) => setRepartidorId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Método de Envío"
        value={metodoEnvio}
        onChange={(e) => setMetodoEnvio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Costo de Envío"
        value={costoEnvio}
        onChange={(e) => setCostoEnvio(e.target.value)}
      />
      <button>Guardar</button>
    </div>
  );
};

export default AddShippingShowModal;
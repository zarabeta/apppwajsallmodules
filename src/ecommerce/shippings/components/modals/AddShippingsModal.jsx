// AddShippingShowModal.jsx

import React, { useState } from 'react';

import { newEnvio } from '../../../../core/api/entregas';

const AddShippingShowModal = ({ onClose }) => {
  const [addressId, setAddressId] = useState('');
  const [repartidorId, setRepartidorId] = useState('');
  const [metodoEnvio, setMetodoEnvio] = useState('');
  const [costoEnvio, setCostoEnvio] = useState('');
  const [productos, setProductos] = useState('');
  const [estatus, setEstatus] = useState('');
  // Lógica para manejar cambios en los campos y enviar datos al servidor

  const handleSave = async () => {
    const entrega = {
      IdDomicilioOK: addressId,
      IdPaqueteriaOK: repartidorId,
      IdTipoMetodoEnvio: metodoEnvio,
      CostoEnvio:costoEnvio,
      productos,
      estatus,
    };

  try {
      const response = await newEnvio('', entrega);
      console.log(response);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

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
      <input
        type="text"
        placeholder="Productos"
        value={productos}
        onChange={(e) => setProductos(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estatus"
        value={estatus}
        onChange={(e) => setEstatus(e.target.value)}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default AddShippingShowModal;

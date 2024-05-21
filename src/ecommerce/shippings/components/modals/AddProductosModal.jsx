// AddProductoShowModal.jsx

import React, { useState } from 'react';

const AddProductoShowModal = ({ onClose }) => {
  const [IdProdServOK, setIdProdServOK] = useState('');
  const [DesProdServ, setDesProdServ] = useState('');
  const [DesPresenta, setDesPresenta] = useState('');
  const [CantidadPed, setCantidadPed] = useState('');
  const [CantidadEnt, setCantidadEnt] = useState('');

  // Lógica para manejar cambios en los campos y enviar datos al servidor

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <h2>Agregar Productos</h2>
      <input
        type="text"
        placeholder="Producto ID"
        value={IdProdServOK}
        onChange={(e) => setIdProdServOK(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={DesProdServ}
        onChange={(e) => setDesProdServ(e.target.value)}
      />
      <input
        type="text"
        placeholder="Presentacion"
        value={DesPresenta}
        onChange={(e) => setDesPresenta(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cantidad pedida"
        value={CantidadPed}
        onChange={(e) => setCantidadPed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enviados"
        value={CantidadEnt}
        onChange={(e) => setCantidadEnt(e.target.value)}
      />
      <button>Guardar</button>
    </div>
  );
};

export default AddProductoShowModal;

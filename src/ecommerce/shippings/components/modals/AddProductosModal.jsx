// AddProductoShowModal.jsx

import React, { useState } from 'react';
import { newProduct } from '../../../../core/api/productos';


const AddProductoShowModal = ({ onClose, id, idpaq }) => {
  const [idProdServOK, setIdProdServOK] = useState('');
  const [idPresentaOK, setIdPresentaOK] = useState('');
  const [desProdServ, setDesProdServ] = useState('');
  const [desPresenta, setDesPresenta] = useState('');
  const [cantidadPed, setCantidadPed] = useState('');
  const [cantidadEnt, setCantidadEnt] = useState('');

  // Lógica para manejar cambios en los campos y enviar datos al servidor
  const handleSave = async () => {
    const producto = {
      IdProdServOK: idProdServOK,
      IdPresentaOK: idPresentaOK,
      DesProdServ: desProdServ,
      DesPresenta: desPresenta,
      CantidadPed: cantidadPed,
      CantidadEnt: cantidadEnt
    };

    try {
      const response = await newProduct(id, idpaq, producto);
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
      <h2>Agregar Productos</h2>
      <input
        type="text"
        placeholder="Producto ID"
        value={idProdServOK}
        onChange={(e) => setIdProdServOK(e.target.value)}
      />
      <input
        type="text"
        placeholder="Presentacion ID"
        value={idPresentaOK}
        onChange={(e) => setIdPresentaOK(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={desProdServ}
        onChange={(e) => setDesProdServ(e.target.value)}
      />
      <input
        type="text"
        placeholder="Presentacion"
        value={desPresenta}
        onChange={(e) => setDesPresenta(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cantidad pedida"
        value={cantidadPed}
        onChange={(e) => setCantidadPed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enviados"
        value={cantidadEnt}
        onChange={(e) => setCantidadEnt(e.target.value)}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default AddProductoShowModal;

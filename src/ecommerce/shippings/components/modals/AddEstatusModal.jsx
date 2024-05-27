// AddProductoShowModal.jsx

import React, { useState } from 'react';

const AddEstatusShowModal = ({ onClose }) => {
  const [IdTipoEstatusOK, setIdTipoEstatusOK] = useState('');
  const [Actual, setActual] = useState('');
  const [Observacion, setObservacion] = useState('');
  const [FechaReg, setFechaReg] = useState('');
  const [UsuarioReg, setUsuarioReg] = useState('');

  // Lógica para manejar cambios en los campos y enviar datos al servidor

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <h2>Agregar Estatus</h2>
      <input
        type="text"
        placeholder="Tipo de estatus"
        value={IdTipoEstatusOK}
        onChange={(e) => setIdTipoEstatusOK(e.target.value)}
      />
      <input
        type="text"
        placeholder="Actual"
        value={Actual}
        onChange={(e) => setActual(e.target.value)}
      />
      <input
        type="text"
        placeholder="Observacion"
        value={Observacion}
        onChange={(e) => setObservacion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fecha de registro"
        value={FechaReg}
        onChange={(e) => setFechaReg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Registrado por"
        value={UsuarioReg}
        onChange={(e) => setUsuarioReg(e.target.value)}
      />
      <button>Guardar</button>
    </div>
  );
};

export default AddEstatusShowModal;

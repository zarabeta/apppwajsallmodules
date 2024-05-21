// AddActRastreoShowModal.jsx

import React, { useState } from 'react';

const AddActRastreoShowModal = ({ onClose }) => {
    const [Ubicacion, setUbicacion] = useState('');
    const [DesUbicacion, setDesUbicacion] = useState('');
    const [Observacion, setObservacion] = useState('');
    const [FechaReg, setFechaReg] = useState('');
    const [UsuarioReg, setUsuarioReg] = useState('');

    // Lógica para manejar cambios en los campos y enviar datos al servidor

    return (
        <div className="modal">
            <button className="close-button" onClick={onClose}>
                ✖
            </button>
            <h2>Agregar Actualizacion de rastreo</h2>
            <input
                type="text"
                placeholder="Ubicacion"
                value={Ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripcion"
                value={DesUbicacion}
                onChange={(e) => setDesUbicacion(e.target.value)}
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

export default AddActRastreoShowModal;

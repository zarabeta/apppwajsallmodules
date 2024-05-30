import apiService from '../service/api';

export const getEntregas = async () => {
    const response = await apiService.get('entregas/envios');
    return response;
}

export const getEntrega = async (id) => {
    const response = await apiService.get(`entregas/envios/${id}`);
    return response;
}

export const createEntrega = async (entrega) => {
    const response = await apiService.post('entregas/envios', entrega);
    return response;
}

export const updateEntrega = async (entrega) => {
    const response = await apiService.put(`entregas/envios/${entrega.id}`, entrega);
    return response;
}

export const deleteEntrega = async (id) => {
    const response = await apiService.delete(`entregas/envios/${id}`);
    return response;
}

export const newEnvio = async (id, entrega) => {
    const response = await apiService.post(`entregas/envios/envio/${id}`, entrega);
    return response;
}

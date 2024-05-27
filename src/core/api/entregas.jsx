import apiService from '../service/api';

export const getEntregas = async () => {
    const response = await apiService.get('entregas');
    return response;
}

export const getEntrega = async (id) => {
    const response = await apiService.get(`entregas/${id}`);
    return response;
}

export const createEntrega = async (entrega) => {
    const response = await apiService.post('entregas', entrega);
    return response;
}

export const updateEntrega = async (entrega) => {
    const response = await apiService.put(`entregas/${entrega.id}`, entrega);
    return response;
}

export const deleteEntrega = async (id) => {
    const response = await apiService.delete(`entregas/${id}`);
    return response;
}

export const newEnvio = async (id, entrega) => {
    const response = await apiService.post(`entregas/envio/${id}`, entrega);
    return response;
}

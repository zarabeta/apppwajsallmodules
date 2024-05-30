import apiService from '../service/api';

export const getProductos = async (id,idpaq) => {
    const response = await apiService.get(`entregas/productos/777-abcd/DHL10`);
    return response;
}

export const getProducto = async (id) => {
    const response = await apiService.get(`entregas/productos/${id}`);
    return response;
}

export const createProducto = async (producto) => {
    const response = await apiService.post('entregas/productos', producto);
    return response;
}

export const updateProducto = async (producto) => {
    const response = await apiService.put(`entregas/productos/${producto.id}`, producto);
    return response;
}

export const deleteProducto = async (id) => {
    const response = await apiService.delete(`entregas/productos/${id}`);
    return response;
}

export const newProduct = async (id, idpaq) => {
    const response = await apiService.post(`entregas/productos/envio/777-abcd/DHL10`);
    return response;
}

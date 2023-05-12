import axios from 'axios'


export const deleteDetalleCompra =async (id) => {
    await axios.delete(`http://localhost:5005/detalleCompra/${id}`)
};
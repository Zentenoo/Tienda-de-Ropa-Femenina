import axios from 'axios'


export const deleteDetalleVenta =async (id) => {
    await axios.delete(`http://localhost:5005/detalleVenta/${id}`)
};
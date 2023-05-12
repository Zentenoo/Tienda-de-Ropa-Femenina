import axios from 'axios'


export const deleteVenta =async (id) => {
    await axios.delete(`http://localhost:5005/venta/${id}`)
};
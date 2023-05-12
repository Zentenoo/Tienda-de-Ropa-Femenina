import axios from 'axios'


export const deleteInventarioAlmacen =async (id) => {
    await axios.delete(`http://localhost:5005/inventarioAlmacen/${id}`)
};
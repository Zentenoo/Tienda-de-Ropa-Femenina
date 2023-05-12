import axios from 'axios'


export const deleteSucursal =async (id) => {
    await axios.delete(`http://localhost:5005/sucursal/${id}`)
};
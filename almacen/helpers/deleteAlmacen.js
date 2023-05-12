import axios from 'axios'


export const deteteAlmacen =async (id) => {
    await axios.delete(`http://localhost:5005/almacen/${id}`)
};
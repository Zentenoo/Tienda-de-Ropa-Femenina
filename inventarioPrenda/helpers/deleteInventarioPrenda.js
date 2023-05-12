import axios from 'axios'


export const deleteInventarioPrenda =async (id) => {
    await axios.delete(`http://localhost:5005/inventarioPrenda/${id}`)
};
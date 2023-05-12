import axios from 'axios'


export const deletePrenda =async (id) => {
    await axios.delete(`http://localhost:5005/prenda/${id}`)
};
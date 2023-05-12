import axios from 'axios'


export const deleteMercaderia =async (id) => {
    await axios.delete(`http://localhost:5005/mercaderia/${id}`)
};
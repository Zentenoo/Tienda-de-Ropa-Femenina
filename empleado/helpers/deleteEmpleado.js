import axios from 'axios'


export const deleteEmpleado =async (id) => {
    await axios.delete(`http://localhost:5005/empleado/${id}`)
};
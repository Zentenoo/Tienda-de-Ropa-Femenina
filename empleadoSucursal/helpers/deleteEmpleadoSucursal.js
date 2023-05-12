import axios from 'axios'


export const deleteEmpleadoSucursal =async (id) => {
    await axios.delete(`http://localhost:5005/empleadoSucursal/${id}`)
};
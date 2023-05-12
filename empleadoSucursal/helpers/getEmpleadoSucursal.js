import axios from 'axios'

export const getEmpleadoSucursales = async() => {

    var url = "http://localhost:5005/empleadoSucursal"

    const resp = await axios.get(url);

    const empleadoSucursales = resp.data.map(empleadoSucursal =>({
        id:empleadoSucursal._id,
        Empleado: empleadoSucursal.empleadoSucursal[0].nombre,
        Sucursal: empleadoSucursal.sucursalEmpleado[0].nombre
    }));

    return empleadoSucursales
}
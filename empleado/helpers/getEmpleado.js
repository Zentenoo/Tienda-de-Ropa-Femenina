import axios from 'axios'

export const getEmpleados = async() => {

    var url = "http://localhost:5005/empleado"

    const resp = await axios.get(url);

    const empleados = resp.data.map(empleado =>({
        id: empleado._id,
        nombre: empleado.nombre,
        Ap_paterno: empleado.Ap_paterno,
        Ap_materno: empleado.Ap_materno,
        ci: empleado.ci,
        telefono: empleado.telefono,
        estado: empleado.estado,
        TipoEmpleado: empleado.empleadoTipo[0].descripcion
    }));
    return empleados
}
import axios from 'axios'

export const getTipoEmpleado = async() => {

    var url = "http://localhost:5005/tipoEmpleado"

    const resp = await axios.get(url);

    const TipoEmpleados = resp.data.map(tipoEmpleado =>({
        id: tipoEmpleado._id,
        descripcion: tipoEmpleado.descripcion,
        salario: tipoEmpleado.salario
    }));
    return TipoEmpleados
}
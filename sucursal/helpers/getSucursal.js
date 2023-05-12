import axios from 'axios'

export const getSucursales = async() => {

    var url = "http://localhost:5005/sucursal"

    const resp = await axios.get(url);

    const sucursales = resp.data.map(sucursal =>({
        id: sucursal._id,
        nombre: sucursal.nombre,
        direccion: sucursal.direccion,
        telefono: sucursal.telefono,
        estado: sucursal.estado
    }));

    return sucursales
}
import axios from 'axios'

export const getAlmacen = async () => {

    var url = "http://localhost:5005/almacen"

    const resp = await axios.get(url);

    const almacenes = resp.data.map(almacen => ({
        id: almacen._id,
        nombre:almacen.nombre,
        direccion: almacen.direccion,
    }));
    return almacenes
}
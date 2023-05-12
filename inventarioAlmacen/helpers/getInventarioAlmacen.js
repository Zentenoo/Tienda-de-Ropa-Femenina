import axios from 'axios'

export const getInventarioAlmacenes = async() => {

    var url = "http://localhost:5005/inventarioAlmacen"

    const resp = await axios.get(url);
    
    const inventarioAlmacenes = resp.data.map(inventarioAlmacen =>({
        id:inventarioAlmacen._id,
        cantidad:inventarioAlmacen.cantidad,
        Prenda: inventarioAlmacen.prendaAlmacen[0].estilo,
        Almacen: inventarioAlmacen.almacenPrenda[0].nombre
    }));

    return inventarioAlmacenes
}
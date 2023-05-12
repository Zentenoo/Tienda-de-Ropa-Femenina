import axios from 'axios'

export const getDetalleCompra = async() => {

    var url = "http://localhost:5005/detalleCompra"

    const resp = await axios.get(url);

    const detalleCompras = resp.data.map(detalleCompra =>({
        id:detalleCompra._id,
        Mercaderia: detalleCompra.detalleMerc[0].cantidad,
        Prenda: detalleCompra.detallePrenda[0].precioUnitario
    }));

    return detalleCompras
}
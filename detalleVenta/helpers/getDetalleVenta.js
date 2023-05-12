import axios from 'axios'

export const getDetalleVenta = async() => {

    var url = "http://localhost:5005/detalleVenta"

    const resp = await axios.get(url);

    const detalleVentas = resp.data.map(detalleVenta =>({
        id:detalleVenta._id,
        Venta: detalleVenta.ventaDetalle[0].cantidad,
        Prenda: detalleVenta.detallePrenda[0].precioUnitario
    }));

    return detalleVentas
}
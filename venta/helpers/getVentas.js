import axios from "axios";

export const getVentas = async () => {

    var url = "http://localhost:5005/venta"

    const resp = await axios.get(url);

    const ventas = resp.data.map(venta => ({
        id: venta._id,
        precioTotal: venta.precioTotal,
        cantidad: venta.cantidad,
        fecha: venta.fecha,
        estado: venta.estado

    }));

    return ventas
};


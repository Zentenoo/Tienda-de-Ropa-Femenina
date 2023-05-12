import axios from 'axios'

export const getMercaderia = async () => {

    var url = "http://localhost:5005/mercaderia"

    const resp = await axios.get(url);

    const mercaderias = resp.data.map(mercaderia => ({
        id: mercaderia._id,
        precioTotal: mercaderia.precioTotal,
        cantidad:mercaderia.cantidad,
        observaciones: mercaderia.observaciones,
        fechaCompra: mercaderia.fechaCompra,
        estado: mercaderia.estado
    }));
    return mercaderias
}
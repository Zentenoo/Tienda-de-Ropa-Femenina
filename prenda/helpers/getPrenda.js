import axios from 'axios'

export const getPrendas = async() => {

    var url = "http://localhost:5005/prenda"

    const resp = await axios.get(url);

    const prendas = resp.data.map(prenda =>({
        id: prenda._id,
        estilo: prenda.estilo,
        temporada: prenda.temporada,
        precioUnitario: prenda.precioUnitario,
        estado: prenda.estado,
        model: prenda.modeloPrenda[0].descripcion,
        Color: prenda.modeloColor[0].descripcion,
        Talla: prenda.modeloTalla[0].descripcion
    }));

    return prendas
}
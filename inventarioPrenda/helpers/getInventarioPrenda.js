import axios from 'axios'

export const getInventarioPrenda = async() => {

    var url = "http://localhost:5005/inventarioPrenda"

    const resp = await axios.get(url);

    const inventarioPrendas = resp.data.map(inventarioPrenda =>({
        id:inventarioPrenda._id,
        cantidad: inventarioPrenda.cantidad,
        Sucursal: inventarioPrenda.inventarioSucursal[0].nombre,
        Prenda: inventarioPrenda.inventarioPrenda[0].estilo,
    }));

    return inventarioPrendas
}
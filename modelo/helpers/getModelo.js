import axios from 'axios'

export const getModelos = async() => {

    var url = "http://localhost:5005/modelo"

    const resp = await axios.get(url);

    const modelos = resp.data.map(modelo =>({
        id: modelo._id,
        descripcion: modelo.descripcion
    }));
    return modelos
}
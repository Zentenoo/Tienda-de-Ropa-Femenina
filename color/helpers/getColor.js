import axios from 'axios'

export const getColors = async() => {

    var url = "http://localhost:5005/color"

    const resp = await axios.get(url);

    const colors = resp.data.map(color =>({
        id: color._id,
        descripcion: color.descripcion
    }));
    return colors
}
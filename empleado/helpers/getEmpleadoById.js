import axios from 'axios'

export const getEmpleadoById = async(id) => {
    try{
        var url= `http://localhost:5005/empleado/${id}`

        const resp = await axios.get(url)
        return resp.data
    }
    catch{
        return "error"
    }
};

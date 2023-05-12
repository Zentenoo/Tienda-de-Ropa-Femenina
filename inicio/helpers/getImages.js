import axios from "axios";
export const getImages = async (search='women clothing store') => 
    await axios.get(`https://api.pexels.com/v1/search?query=${search}`,{
        headers:{
            Authorization: '563492ad6f917000010000016f29c57e073a4642a013941a9dca84a5'
        }
    })


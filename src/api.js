import axios from 'axios';

export const getList = async() => {
    const planets = await axios.get("http://localhost:3001/planets")
    return planets.data
}

import axios from 'axios';
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(res => res.data);
}

const create = newObject => {
    const response = axios.post(baseUrl, newObject);
    return response.then(res => res.data);
}

const removePerson = id => {
    const response = axios.delete(`${baseUrl}/${id}`)
    return response.then(res => res.data);
}

const update = (id, personObject) => {
    const response = axios.put(`${baseUrl}/${id}`, personObject);
    return response.then(res => res.data);
}

export default { getAll, create, removePerson, update }
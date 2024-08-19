import axios from 'axios';

export default async function fetch(path) {
    try {
        const response = await axios.get(path);
        return response.data
    } catch(error) {
        return {
            error
        };
    }
}

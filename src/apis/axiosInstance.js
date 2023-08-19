import axios from "axios";

// BT - This URL is your API server.

const BASE_URL = 'http://localhost:8000/djoser_auth/'

// ###################################################################
// BT - Define a new axios instance with your own config and baseURL.
//####################################################################

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})
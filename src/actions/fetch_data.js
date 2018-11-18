import axios from 'axios';

export default function fetch_data() {
    const API_KEY = 'nQO61wkBKM5r7KR3aPzHWVewiDCGmgQ7tWNXMnPL';
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
    const request = END_POINT + API_KEY;

    return {
        type: 'FETCH_DATA', 
        payload: request
    }
}
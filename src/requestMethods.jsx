import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjcyMmQ0MWI2ZWU2YzE0NmJiZjUwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTgzMDAwMiwiZXhwIjoxNjQwMDg5MjAyfQ.bbKoP_cH63IOamy1dxJOSNtrILeJa7zI-J0qE6EJi7o'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});

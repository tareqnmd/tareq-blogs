import axios from 'axios';

const apiInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 1000,
	headers: {},
});

export default apiInstance;

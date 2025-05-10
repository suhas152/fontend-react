import axios from 'axios';

export const API_URL = "https://ecommersbackend-production.up.railway.app";
export const DEPLOYED_URL = "https://zosh-bazzar-backend.onrender.com"
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});
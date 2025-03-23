import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export const getExamSchedule = async () => {
  const response = await api.get('/api/exam-schedule');
  return response.data;
};

export const getUOContacts = async () => {
  const response = await api.get('/api/uo/contacts');
  return response.data;
};

export const getNLPAnswer = async (query) => {
  const response = await api.post('/api/nlp', { query });
  return response.data;
};

export const authenticateUser = async (email, password) => {
  const response = await api.post('/api/auth/login', { email, password });
  return response.data;
};

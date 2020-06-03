import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

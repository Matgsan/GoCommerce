import axios from 'axios';
import { Platform } from 'react-native';

const api = axios.create({
  baseURL:
    // IF RUNNING WITHOUT GENYMOTION, USE 10.0.2.2
    Platform.OS === 'android' ? 'http://10.0.3.2:3000' : 'http://localhost:3000'
});

export default api;

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5009/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getLogisticsItems() {
    return apiClient.get('/logistics');
  },
  getLogisticsItem(id) {
    return apiClient.get(`/logistics/${id}`);
  },
  addLogisticsItem(item) {
    return apiClient.post('/logistics', item);
  },
  updateLogisticsItem(id, item) {
    return apiClient.put(`/logistics/${id}`, item);
  },
  deleteLogisticsItem(id) {
    return apiClient.delete(`/logistics/${id}`);
  },
};
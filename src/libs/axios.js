import axios from 'axios';

// const API_URL = 'https://jztd440f-3001.asse.devtunnels.ms';

const API_URL = 'https://spitech-backend.azurewebsites.net';

// สร้างอินสแตนซ์ Axios ทั่วโลกพร้อมการตั้งค่าเริ่มต้น
const Axios = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// เพิ่มอินเตอร์เซ็ปเตอร์การตอบสนองเพื่อจัดการข้อผิดพลาด 401 และ 403
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      // ลบโทเค็นออกจากที่เก็บข้อมูลภายในเครื่องและเปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ
      localStorage.removeItem('token');
      window.location = '/';
    }

    return Promise.reject(error);
  }
);

// เพิ่มอินเตอร์เซ็ปเตอร์การร้องขอเพื่อเพิ่มส่วนหัวการอนุญาตหากมีโทเค็นอยู่ในที่เก็บข้อมูลภายในเครื่อง
Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ส่งออกอินสแตนซ์ Axios
export default Axios;

import axios from "axios";

export const axiosBase = axios.create({
  // baseURL: 'https://eprofile-api.vercel.app/api/v1',
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

// const axiosSecure =()=>{
//     return axiosBase
// }

// export default axiosSecure

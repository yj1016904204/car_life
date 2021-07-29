import axios from 'axios';
import { Toast } from 'antd-mobile';


axios.interceptors.request.use(cfg => {
  Toast.loading('Loading...');
  return cfg
})

axios.interceptors.response.use(res => {
  Toast.hide()
  return res.data
})
export default axios
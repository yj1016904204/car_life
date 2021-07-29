import axios from '../services/https';
import { GET_DETAIL_LIST } from '../config/utils';

const request = {
  getDetailList(SerialID, cityId) {
    return axios.get(GET_DETAIL_LIST, { params: { SerialID, cityId } });
  }
}
export default request
import axios from '../services/https';
import { GET_CAR_LIST, GET_SERIAL_LIST } from '../config/utils';

const request = {
  getCarList() {
    return axios.get(GET_CAR_LIST)
  },
  getSerialList(MasterID) {
    return axios.get(GET_SERIAL_LIST, { params: { MasterID } });
  }
}
export default request
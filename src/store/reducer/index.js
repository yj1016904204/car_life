import getCarList from './getCarList';
import getCarLetter from './getCarLetter';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  getCarList,
  getCarLetter,
})
export default reducers
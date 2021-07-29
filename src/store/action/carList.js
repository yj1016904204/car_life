import { GET_CAR_LIST, GET_CAR_FIRST_LETTER } from '../constant';
import models from '../../models/index';
export const getCarList = data => ({ type: GET_CAR_LIST, data })
export const getCarFirstLetter = data => ({ type: GET_CAR_FIRST_LETTER, data })

export const getCarListAsycn = () => {
  return (dispatch) => {
    models.getCarList().then(res => {
      return dispatch(getCarList(res.data))
    })
  }
}
export const getCarFirstLetterAsycn = () => {
  return (dispatch) => {
    models.getCarList().then(res => {
      return dispatch(getCarFirstLetter(res.data))
    })
  }
}


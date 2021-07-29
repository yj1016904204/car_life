import { GET_CAR_FIRST_LETTER } from '../constant';

export default function (state = [], actions) {
  const { type, data } = actions
  switch (type) {
    case GET_CAR_FIRST_LETTER:
      state = Array.from(new Set(data.map(item => item.Spelling[0])))
      let newState = JSON.parse(JSON.stringify(state))
      return newState
    default:
      return state
  }
}
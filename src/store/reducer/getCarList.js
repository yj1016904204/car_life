import { GET_CAR_LIST } from '../constant';

export default function (state = {}, actions) {
  const { type, data } = actions
  switch (type) {
    case GET_CAR_LIST:
      data.forEach(item => {
        let firstStr = item.Spelling.charAt(0)
        state[firstStr] ? state[firstStr].push(item) : state[firstStr] = [item]
      })
      let newState = JSON.parse(JSON.stringify(state))
      return newState
    default:
      return state
  }
}
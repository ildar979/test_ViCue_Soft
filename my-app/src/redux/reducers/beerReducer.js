import { initState } from '../initState'

export const beerReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_ONE_BEER':
      return { ...payload }
    default:
      return state;
  }
}

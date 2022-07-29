import { pageState } from '../initState'

export const perReducer = (state = pageState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_CURRENT_BEER':
      return { ...state, currentBeer: payload }
    default:
      return state;
  }
}

import { initState } from '../initState'

export const perReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_CURRENT_BEER':
      return { ...state, ...payload }
    default:
      return state;
  }
}

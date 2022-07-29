import { beersState } from '../initState'

export const beersReducer = (state = beersState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_BEERS':
      return { ...payload, beers: payload }
    default:
      return state;
  }
}

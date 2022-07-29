export const beersSelector = {
  getProp: (propKey) => 
    (state) => state.beers[propKey],
  getState: (state) => state.beers,
}

export const perSelector = {
  getProp: (propKey) => 
    (state) => state.per[propKey],
  getState: (state) => state.per,
}

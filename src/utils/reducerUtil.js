export const createReducer = (intialState, fnMap) => (state = intialState, { type, payload }) => {
  const handler = fnMap[type];

  return handler ? handler(state, payload) : state;
};


// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;

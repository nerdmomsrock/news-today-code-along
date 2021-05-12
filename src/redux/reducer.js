//initial state
const initialState = {
  count: 0,
};

//action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
//alternative to increment and decrement
const CHANGE_COUNT = "CHANGE_COUNT";

//action creator....a function that returns an action
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const changeCount = (count) => {
  return {
    type: CHANGE_COUNT,
    payload: count,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case CHANGE_COUNT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;

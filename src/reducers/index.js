import initialstate from "./initial_state"
const subReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state,
        color: action.color
      };
    default:
      return { ...state
      };
  }
};

export default subReducer;
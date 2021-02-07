import ACTIONS from "./actions";

const initialState = {
  contact: {
    name: "",
    number: "",
    contactAdded: false,
  },
};

function contactDataReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.Types.ADD_CONTACT:
      return Object.assign({}, state, {
        contact: { ...action.contact },
      });
    case ACTIONS.Types.RESET_CONTACT:
      return Object.assign({}, state, {
        contact: initialState,
      });
    default:
      return state;
  }
}

export default contactDataReducer;

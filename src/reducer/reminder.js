const reminder = (state = [], action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      return [...state, action.data];
    case "EDIT_REMINDER":
      return state.map(event => {
        if (event.id === action.data.id) {
          return action.data;
        }
        return event;
      });
    case "DELETE_REMINDER":
      return state.filter(event => event.id !== action.data.id);
    default:
      return state;
  }
};

export default reminder;

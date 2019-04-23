const todo = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.data];
    case "EDIT_TODO":
      return state.map(event => {
        if (event.id === action.data.id) {
          return action.data;
        }
        return event;
      });
    case "DELETE_TODO":
      return state.filter(event => event.id !== action.data.id);
    default:
      return state;
  }
};

export default todo;

let id = 1;

export const addTodo = data => ({
  type: "ADD_TODO",
  data: { id: id++, ...data }
});

export const editTodo = data => ({
  type: "EDIT_TODO",
  data
});

export const deleteTodo = data => ({
  type: "DELETE_TODO",
  data
});

export const addReminder = data => ({
  type: "ADD_REMINDER",
  data: { id: id++, ...data }
});

export const editReminder = data => ({
  type: "EDIT_REMINDER",
  data
});

export const deleteReminder = data => ({
  type: "DELETE_REMINDER",
  data
});

const api = 'http://127.0.0.1:8000/api/todos/';
const headers = {'Content-Type': 'application/json'};

export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await fetch(api, {headers});
    const todos = await res.json();
    return dispatch({
      type: 'FETCH_TODOS',
      todos,
    });
  };
};

export const addTodo = (name, description) => {
  return async (dispatch) => {
    const body = JSON.stringify(
        {
          'title': name,
          'completed': false,
          'description': description}
    );

    const res = await fetch(api, {headers, method: 'POST', body});
    const todo = await res.json();
    return dispatch({
      type: 'ADD_TODO',
      todo,
    });
  };
};

export const editTodo = (item, index) => {
  return async (dispatch) => {
    const {id, title, completed, description} = item;
    const body = JSON.stringify(
        {
          'id': id,
          'title': title,
          'completed': completed,
          'description': description,
        }
    );

    const res = await fetch(api + id + '/', {headers, method: 'PUT', body});
    const todo = await res.json();

    return dispatch({
      type: 'EDIT_TODO',
      todo,
      index,
    });
  };
};

export const deleteTodo = (id, index) => {
  return async (dispatch) => {
    await fetch(api + id + '/', {headers, method: 'DELETE'});

    return dispatch({
      type: 'DELETE_TODO',
      index,
    });
  };
};

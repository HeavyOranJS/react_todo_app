const api = 'http://127.0.0.1:8000/api/todos/';

export const fetchTodos = () => {
  return async (dispatch) => {
    const headers = {'Content-Type': 'application/json'};
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
    const headers = {'Content-Type': 'application/json'};
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


// const {itemName, itemDescription} = this.state;
// const headers = {'Content-Type': 'application/json'};
// const body = JSON.stringify(
//     {
//       'title': itemName,
//       'completed': false,
//       'description': itemDescription}
// );

// await fetch(this.context.api, {headers, method: 'POST', body});


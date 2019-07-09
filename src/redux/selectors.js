import { VISIBILITY_FILTERS } from "../constants";
import VisibilityFilters from "../components/VisibilityFilters";

export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

export const getTodoByVisibilityFilter = (store, visiblitiyFilter) => {
  const allTodos = getTodos(store);
  switch(visiblitiyFilter){
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo=> todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
}

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */

const mapStateToProps = state => {
  const { visiblitiyFilter } = state;
  const todo = getTodoByVisibilityFilter(state, visiblitiyFilter);
  return { todo };
}

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

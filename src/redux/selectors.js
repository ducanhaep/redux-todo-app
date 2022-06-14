import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => {
  //   const searchText = searchTextSelector(state);
  //   const todoRemaining = state.todoList.filter((todo) => {
  //     return todo.name.includes(searchText);
  //   });
  //   console.log(state.filters.search);
  //   return todoRemaining;

  return state.todoList;
};
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        priorities.length &&
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        priorities.includes(todo.priority)
      );
    });
  }
);

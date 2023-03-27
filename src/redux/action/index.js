import {
    ADD_TODO,
    DELETE_TODO,
  } from "./action.types";
  
  
  export const addTodo = text => {
    return {
      type: ADD_TODO,
      text
    };
  };
  
 
  
  export const deleteTodo = id => {
    return {
      type: DELETE_TODO,
      id
    };
  };
  
 
  
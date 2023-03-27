import {
    ADD_TODO,
    DELETE_TODO
  } from "../action/action.types";
  
  const initalState = {
    counter: 0,
    list: []
  };
  
  const todos = (state = initalState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          counter: state.counter + 1,
          list: [
            ...state.list,
            { id: state.counter + 1,
                 text: action.text
             }
          ]
        };
     
      case DELETE_TODO:
        return {
          ...state,
          list: state.list.filter(item => item.id !== action.id)
        };
     
      default:
        return state;
    }
  };
  
  export default todos;
  
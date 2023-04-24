import actions from "./action";

const initialData = [];



export const todoData = (state = initialData, action) => {

  switch (action.type) {
    case actions.ADD:
      const newTask = {
        id: Math.random(),
        task: action.payload,
        isComplete: false
      };
      return [...state, newTask];

    case actions.DELETE:
      state = state.filter((y) => y.id !== action.payload);
      return state;

    case actions.COMPLETE:
      action.payload.isComplete = !(action.payload.isComplete);
      state = [...state];
      return state;

    default:
      return state;
  }
};

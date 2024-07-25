export type TTodo = {
  id: number;
  text: string;
  price: number;
  totalPrice: number;
  isCompleted: boolean;
};

export type TTodoAction =
  | {
      type: "ADD_TODO";
      payload: { text: string; price: number; totalPrice: number };
    }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const todoReducer = (todos: TTodo[], action: TTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.payload.text,
          price: action.payload.price,
          totalPrice: action.payload.totalPrice,
          isCompleted: false,
        },
      ];
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
};

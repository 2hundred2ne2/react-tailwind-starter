import { TTodoAction } from "../../../reducer/CartReducer";
import { TTodo } from "../todo_props_memo/Todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  dispatch,
}: {
  todos: TTodo[];
  dispatch: React.Dispatch<TTodoAction>;
}) => {
  const totalPrice = todos.reduce((acc, todo) => acc + todo.price, 0);
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
      <div className="mt-4">총 가격: {totalPrice.toLocaleString()} 원</div>
    </>
  );
};
export default TodoList;

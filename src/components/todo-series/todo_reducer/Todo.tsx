import { useReducer } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { todoReducer } from "../../../reducer/CartReducer";
//리듀서는 여러개의 값을 사용하는  복잡한 스테이터스를 다룰때 사용
//reducer
//dispatch
//action
const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]"> 장바구니 </h1>
          <p className="text-sm mb-5">장바구니에 물건을 추가하세요.</p>
          {/* 등록 */}
          <TodoEditor dispatch={dispatch} />
          {/* 목록 */}
          <TodoList todos={todos} dispatch={dispatch} />
          {/* 총가격 */}
        </div>
      </div>
    </>
  );
};
export default Todo;

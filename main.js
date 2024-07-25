let todos = [{ id: 1, text: "아침먹기", isCompleted: false }];
const addTodo = (text) => {
  const newTodo = {
    id: todos.length + 1,
    text: text,
    isCompleted: false,
  };
  // todos.push(newTodo); 불변성에 위배되어서
  todos = [...todos, newTodo]; //데이터 변경 시 새로운 데이터를 만들어서 tod에 넣어줘라
  //const toggleTodo = () => addTodo("점심먹기");
  //es6 새로운 배열을 만들어주는 내장 매서드
  //map, filter
  const toggleTodo = (id) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
  };

  const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };
};

addTodo("점심먹기");
console.log(todos);

addTodo("밥먹기");
console.log(todos);

deleteTodo(1);
console.log(todos);

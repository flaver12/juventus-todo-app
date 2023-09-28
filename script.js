const addTodo = () => {
    const todo = document.querySelector("#todo").value;
    const todoList = document.querySelector("#todo-list");
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    todoList.appendChild(newTodo);
    document.querySelector("#todo").value = "";
}


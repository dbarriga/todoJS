let deleteTodo = (id) => {
    todos = todos.filter(item => item.id != id);
    paintTodos();
}

let complete = (id) => {
    document.getElementById("delete"+id).remove();
    document.getElementById("todo"+id).style.backgroundColor = '#bdecb6';
    document.getElementById("todo"+id).style.color = '#000000';

};
    let todos = [
        {id: 1, text:"Paint the House"},
        {id: 2, text:"Buy groceries"}
    ];
    let paintTodos = () => {
        let x = '';
        todos.forEach(item => {
            x += '<li id="todo'+item.id+'"><div class="list_text" onclick="complete('+item.id+')">'+item.text+'</div><div id="delete'+item.id+'" class="delete" onclick="deleteTodo('+item.id+')">X</div></li>';
        });
        document.getElementById("todo_list").innerHTML = x;
    }
   let addTodo = () => {
        const VALUE =  document.getElementById("todo_input");
        if (VALUE.value) {
            todos.push({
                id: todos.length ? todos[todos.length -1].id +1 : 1, text: VALUE.value
            });
            VALUE.value = '';
            paintTodos();
        }
    };
document.addEventListener('DOMContentLoaded', function() {
    const INPUT =  document.getElementById("todo_input");
   INPUT.addEventListener("keyup", (event) => {
        if (event.keyCode === 13 && INPUT.value) {
            event.preventDefault();
            addTodo();
        }
    });
    paintTodos();
 });

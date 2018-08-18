const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    var li = document.createElement("li");
    var todo = document.createTextNode("todo");
    var erase = document.createElement("BUTTON");
    var txt = document.createTextNode("x");
    list.appendChild(li);
    li.appendChild(todo);
    erase.appendChild(txt);
    li.appendChild(erase);
}

function deleteTodo() {

}
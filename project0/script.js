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
    var Todo = document.createTextNode("Todo");
    var erase = document.createElement("BUTTON");
    var check = document.createElement("INPUT");
    var txt = document.createTextNode("x");
    var counter = itemCountSpan.innerHTML;
    list.appendChild(li);
    li.appendChild(Todo);
    erase.appendChild(txt);
    li.appendChild(erase);
    check.setAttribute("type", "checkbox");
    li.appendChild(check);
    counter++;
    itemCountSpan.innerHTML = counter;
}

function deleteTodo() {
    document.getElementsByTagName('li');

}
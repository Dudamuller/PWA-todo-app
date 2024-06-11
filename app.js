document.getElementById('todo-form')
addEventListener("submit",function(e) {
e.preveventDefault();
const input = this.documentElementById
("todo input");
AudiTodo(input.value);
imput.value = "";
});
function addTodo (task){
    const list = document.getElementById("todo-list");
    const listItem = task;
    list.appendChild(listItem);
}

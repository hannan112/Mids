let todoList = [];

displayItems();

function adding() {
    let inputElement = document.querySelector('#toDoInput');
    let todoItem = inputElement.value;
    todoList.push(todoItem);
    inputElement.value = '';
    displayItems();
    }

function displayItems() {
    let containerInput = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i];
        newHtml += `
        <div class="todo-item">
            <input type="checkbox" onchange="${i}">
            <span>${item}</span>
            <button class='btn-delete' onclick="deleteItem(${i})">Delete</button>
        </div>
        `;
    }
    containerInput.innerHTML = newHtml;
    }

function deleteItem(index) {
    todoList.splice(index, 1);
    displayItems();
    }

function Done(index){
}




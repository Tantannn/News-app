'use strict'
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("btn-add");
const input = document.getElementById("myInput");
const myUl = document.getElementById('myUL')

if (userActive) {
    //  console.log(todoArr);
    addNewTask()
    displayList()
    checkedIcon()
    close()
}

else {
    alert('Please log in!')
}

//display List
function displayList() {
    myUL.innerHTML = ''
    // console.log(userActive)
    todoArr.filter(todo => todo.owner === userActive.userName).forEach(todo => {
        myUL.innerHTML += `<li class=${todo.isdone ? "checked" : ""}>${todo.task
            }<span class="close" >×</span></li>`
    });

}
//add New Task
function addNewTask() {
    addBtn.addEventListener("click", add)
    function add() {
        if (!input.value) {
            alert('Please write somethings!')
        } else {
            let newTask = new Task(input.value, userActive.userName, false)
            todoArr.push(newTask)
            saveToStorage('todoTask', todoArr)
            input.value = ''
            displayList()
            close()
        }
    }
}
// checked Icon
function checkedIcon() {
    myUl.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked')


            const todo = todoArr.find(
                (todoItem) =>
                    todoItem.owner === userActive.userName &&
                    todoItem.task === ev.target.textContent.slice(0, -1)
            );
            todo.isdone = ev.target.classList.contains('checked') ? true : false
            // console.log(todo)

            saveToStorage("todoTask", todoArr)

        }

    });
}




function close() {

    var close = document.querySelectorAll(".close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let text = 'Are you sure?'
            if (confirm(text) == true) {
                console.log(i)
                var div = this.parentElement;
                div.style.display = "none";
                todoArr.splice(i, 1);
                saveToStorage("todoTask", todoArr);
                // debugger
                displayList()
            }
        }
    }

}
'use strict'
function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}; 
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};



// UserArr

var users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
const userArr = users.map((user) => parseUser(user));

// userActive
var userActive = getFromStorage("userActive") ? parseUser(getFromStorage("userActive")) : null;
// console.log(userActive)


//  todo 
var todos = getFromStorage("todoTask") ? getFromStorage("todoTask") : [];
const todoArr = todos.map( (user) => parseTodoTask(user) );
saveToStorage("todoTask", todoArr);


//  User
function parseUser(userData) {
    const user = new User(
        userData.fname,
        userData.lname,
        userData.userName,
        userData.password)
    return user
};

// todo
function parseTodoTask(taskData) {
    const user = new Task(
        taskData.task,
        taskData.owner,
        taskData.isdone)
    return user
};

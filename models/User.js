'use strict'
class User { // tạo contructor 
    constructor(
        fname,
        lname,
        userName,
        password,
        pagesize = 4,
        category = "business"
    ) {
        this.fname = fname;
        this.lname = lname;
        this.userName = userName;
        this.password = password;
        this.pagesize = pagesize;
        this.category = category;
    }
}
class Task { 
    constructor(task, owner, isdone) {
        this.task = task;
        this.owner = owner;
        this.isdone = isdone;
    }
};

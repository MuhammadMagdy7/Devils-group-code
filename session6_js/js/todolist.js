
//1. empty array
let TodoListArray = [];

// 2. get input from user
let inputs = prompt("Enter what do you want to do? ")

// 3. ask the user for questions (add , show, delete, q) multiple times

while(inputs != 'q'){

    if(inputs == 'add'){
        let addNew = prompt("Enter your new todo: ")
        // 4. adding into empty array through `push`
        TodoListArray.push(addNew)
    }else if(inputs == 'show'){
        //5. use `forEach` to show all data
        TodoListArray.forEach((extracted, indexes) =>{
            console.log(indexes + " " + extracted)
        })
    }else if(inputs == 'del'){
        let deletes = prompt("Enter your index to delete: ")
        TodoListArray.splice(deletes, 1)
    }


    inputs = prompt("Enter what do you want to do? ")
}
console.log("Ok Thanks Bye!")

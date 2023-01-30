
let todo = [];

function addTodo(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;

    if(title != "" && description != "" && date != ""){
        let newTodo = {
            title : title,
            description : description,
            date : date
        };
    
        todo.push(newTodo);
    
        document.getElementById('title').value = "";
        document.getElementById('description').value = ""
        document.getElementById('date').value = "";
        
        display();
    
        // console.log(todo);
    }else{
        alert('You must provide the values');
    }

}


function display(){
    document.getElementById('todo_display').innerHTML = "";

    todo.map(item => {
        document.getElementById('todo_display').innerHTML += `<div class="todo">
                    <div class="todo_title">${item.title}</div>
                    <div class="todo_date">${item.date}</div>
                    <p>${item.description}</p>
                </div>`
    });

    // document.getElementById('todo_display').innerHTML = todo_list.toString;

}
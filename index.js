const form = document.querySelector('#form')
const addButton = document.querySelector('#submit')
const completeButton = document.querySelectorAll('#complete')
const deleteButton = document.querySelectorAll('#delete')
const toDoList = document.querySelector('#list')
const title = document.querySelectorAll('#content')
const options = document.querySelectorAll('.options')

function addTodo() {
    const input = document.querySelector("input");
    const value = input.value;
    
    if (value === "") {
        alert ("Please enter a task.")
        return;
    }
    
    const newList = document.createElement('li')
    newList.classList.add('quest');
    
    newList.innerHTML = `
    <h2 id="content" class="">${value}</h2>
            <div class="options">
                <button id="complete" class="button complete-color task-button">Complete</button>
                <button id="delete" class="button delete-color task-button">Delete</button>
            </div>
    `
    toDoList.appendChild(newList)
    input.value = ""
}


//This doesn't work for tasks that were added dynamically

// completeButton.forEach(function(completeButton, index) {
//     completeButton.addEventListener('click', function() {
//         const toDos = document.querySelectorAll(".quest");
//         const toDo = toDos[index];


//         toDo.classList.toggle("complete")
//     })

//     deleteButton[index].addEventListener('click', function() {
//         // toDo[index].remove();
//         // toDoList.removeChild(toDo[index])
//         // const list = options.parentNode;
//         // toDoList.removeChild(toDo[index])
//         const task = this.parentElement.parentElement;
//         task.remove();

//     })
// })

toDoList.addEventListener('click', event => {
    if(event.target.matches('#complete')) {
        completeButton.forEach(completeButton => {
            completeButton.addEventListener('click', function() {
                // const toDos = document.querySelectorAll(".quest");
                // const toDo = toDos[index];
                const task = this.parentElement.parentElement;

            task.classList.toggle("complete")

        })
    })
    } else if (event.target.matches('#delete')) {
        deleteButton.forEach(deleteButton => {
            deleteButton.addEventListener('click', function() {
                //         // toDo[index].remove();
                //         // toDoList.removeChild(toDo[index])
                //         // const list = options.parentNode;
                //         // toDoList.removeChild(toDo[index])
                        const task = this.parentElement.parentElement;
                        task.remove();
            })
        })
    }
})







// completeButton.addEventListener('click', completedTodo())


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
    //Make a function to loop through the list each time this event is called  
      
})


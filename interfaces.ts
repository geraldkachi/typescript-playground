// function showTodo(todo: {title: string, text: string}) {
//     console.log(todo.title+' '+todo.text);
// }

// let myTodo = {title: 'i love ikoojo', text: 'that is all'}

// showTodo(myTodo)

                // INTERFACES

interface Todo{
    title: string
    text: string
}

function showTodo(todo: Todo) {
    console.log(todo.title+' '+todo.text);
}
let myTodo = {title: 'i love ikoojo', text: 'that is all'}
showTodo(myTodo)
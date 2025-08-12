const todos =  [
    {
        id: 1,
        description: 'Estudar JavaScript',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: false,
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: false,
    },
];

const descriptionOfLastTodo = todos[2].description

console.log(descriptionOfLastTodo);

const todosJson = JSON.stringify(todos)
console.log(todosJson)
const todoslist = JSON.parse(todosJson);
console.log(todoslist)
import axios from 'axios';
// Goal: Make a network request to fetch some JSON and
// print the result

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// Interface used to define the structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    // Response.data has properties of:
    // id
    // title
    // completed
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
});


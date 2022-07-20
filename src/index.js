import './css/styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const newTodo = new Todo('Aprender javaScrip');
// todoList.nuevoTodo( newTodo );


// console.log( todoList );
// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'LUIS0016');
// sessionStorage.setItem('mi-key', 'LUIS0016');

/* setTimeout(() => {
    
    localStorage.removeItem('mi-key');
}, 1500); */

// newTodo.imprimirClase();

todoList.todos.forEach( crearTodoHtml );

// todoList.todos[0].imprimirClase();

// console.log('todos', todoList.todos);
import './styles.css';
import { Todo, TodoList } from './classes/index'
import { crearTodoHtml } from './js/componentes'


export const todoList = new TodoList();



//todoList.todos.ForEach(todo => crearTodoHtml( todo ) );
//SON LO MISMO, FUNCIONA CUANDO ES SOLO UN ARGUMENTO
todoList.todos.forEach( crearTodoHtml );


/* const tarea =  new Todo('Aprender JS');

todoList.nuevoTodo( tarea );

//const tarea2 =  new Todo('Aprender Node');


//todoList.nuevoTodo( tarea2 );

console.log( todoList );

crearTodoHtml( tarea ); */

//localStorage.setItem('mi-key','ABC123');
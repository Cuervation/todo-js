//Referenicas en el html
import { Todo } from '../classes'

import { todoList } from '../index'



const divTodoList = document.querySelector('.todo-list');
const txtinput = document.querySelector('.new-todo');
const btnBorrarAll = document.querySelector('.clear-completed');
const ulFiltros =document.querySelector('.filters');
const anchorFiltros =document.querySelector('.filtro');

export const crearTodoHtml = ( todo ) => {
    const htmlTodo = ` 
        <li class="${ (todo.completado) ? 'completed': '' }"  data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked': '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    
    divTodoList.append( div.firstElementChild );
    

    return div.firstElementChild;

}

//Eventos
txtinput.addEventListener('keyup', ( event ) =>
{
    if ( event.keyCode === 13 && txtinput.value.length > 0 ) {
        //console.log(txtinput.value);
        const nuevoTodo = new Todo ( txtinput.value );
        todoList.nuevoTodo( nuevoTodo )    ;
        crearTodoHtml( nuevoTodo );
        txtinput.value = '';
        //console.log( todoList );
    }

});

divTodoList.addEventListener('click', ( event ) => {
    const nombreElemento = event.target.localName ; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    if ( nombreElemento.includes('input')) {    
       todoList.marcarCompletado( todoId );
       todoElemento.classList.toggle('completed');
    } else if ( nombreElemento.includes('button')) {
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }

});


btnBorrarAll.addEventListener('click',() => {
    todoList.eliminarCompletados();

    for ( let i = divTodoList.children.length-1; i>=0;i--){
        const elemento = divTodoList.children[i];
        console.log( elemento + 'aaaaaaaaaa');
        if ( elemento.classList.contains('completed')) {//Si tiene la clase completed, lo borro
            divTodoList.removeChild(elemento);

        }


    }


});


ulFiltros.addEventListener('click',( event ) => {
    const filtro = event.target.text;
    if ( !filtro ) { return; }
    //anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    //event.target.classList.add('selected'); // NO ANDA y estoy re podrido de esto. Después vemos!
    for (const elemento of divTodoList.children){
        //elemento.classList = elemento.classList.contains('completed');
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed')
        switch( filtro ) {
            case 'Pendientes':
                if ( completado) {
                    elemento.classList.add('hidden');
                }
            break;    
            case 'Completados':
                if ( !completado) {
                    elemento.classList.add('hidden');
                }
            break;                
        }
        
    }

    



});


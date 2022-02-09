import { Todo } from './todo.class';

export class TodoList {

    constructor(){
        
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }


    eliminarTodo( id ) {
        
        this.todos = this.todos.filter( todo => todo.id != id )//excluye
        this.guardarLocalStorage();
    }

    marcarCompletado ( id ) {
        for ( const todo of this.todos) {
            if (todo.id == id){
                todo.completado = !todo.completado;
            }
        }
        this.guardarLocalStorage();
    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado )//excluye
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todos));

    }

    cargarLocalStorage(){
        if ( localStorage.getItem('todo')) {
            this.todos = JSON.parse(localStorage.getItem('todo'));
        }
        else {
            this.todos = [];
        }        

        //this.todos = this.todos.map( obj => Todo.fromJson( obj ));
    }

}
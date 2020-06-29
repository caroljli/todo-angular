import { Component } from '@angular/core';
import { Todo } from './classes/todo/todo';
import { TodoDataService } from './classes/todo/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodoDataService ]
})
export class AppComponent {
  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency associated with the
  // dependency injection token and assign it to a property, todoDataService
  constructor(private todoDataService: TodoDataService) {}

  addTodo() {
    // Call on todo data service to add todo
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}

// Implement all view logic by adding properties and methods within the class
// Business logic are in todoDataService


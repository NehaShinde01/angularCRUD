import { Component, numberAttribute } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: any[] = [];
  users: any[] = [];

  selectedTodo: any;

  todoForm = new FormGroup({
    note: new FormControl(''),
    assignedTo: new FormControl(null)
  });

  search = new FormControl('');


  constructor(private _todoService: TodoService) {

  }
  /**
   * this function is called when todo component is initialize
   */
  ngOnInit() {
    this.getTodos();
    this.getUsers();
    this.search.valueChanges.subscribe((query: any) => {
      this._todoService.searchTodo(query).subscribe(((todos: any) => {
        this.todos = todos || [];
        
      }));
    })
  }

  //When following function is called, the list of todos is refresh
  getTodos() {
    this._todoService.getTodos().subscribe((todos: any) => {
      this.todos = todos;

    });
  }

  onSubmitHandler() {
    if (this.selectedTodo) {
      this.updateTodo();
    } else {
      this.addTodo();
    }
  }

  addTodo() {
    this._todoService.createTodo(this.todoForm.value).subscribe(() => {
      this.todoForm.reset();
      this.getTodos();
    });
    this._todoService
  }

  deleteTodo(id: number) {
    this._todoService.deleteTodo(id).subscribe(() => {
      this.getTodos();
    })
  }

  selectTodo(todo: any) {
    this.selectedTodo = todo;
    this.todoForm.patchValue(todo);
  }

  updateTodo() {
    this._todoService.updateTodo(this.selectedTodo.id, this.todoForm.value).subscribe(() => {
      this.selectedTodo = null;
      this.todoForm.reset();
      this.getTodos();
    })
  }

  getUsers() {
    this._todoService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }
}

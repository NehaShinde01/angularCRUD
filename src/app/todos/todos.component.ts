import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: any[] = [];

  todoForm = new FormGroup({
    note: new FormControl(''),
  });

  search = new FormControl('');

  constructor(private _todoService: TodoService) {

  }
  /**
   * this function is called when todo component is initialize
   */
  ngOnInit() {
    this.getTodos();
    this.search.valueChanges.subscribe((query: any) => {
      this._todoService.searchTodo(query).subscribe(((todos: any) => {
        this.todos = todos || [];
      }));
    })
  }

  //when following function is called, the list of todos is refresh
  getTodos() {
    this._todoService.getTodos().subscribe((todos: any) => {
      this.todos = todos;
    });
  }

  addTodo() {
    this._todoService.createTodo(this.todoForm.value).subscribe(() => {
      this.getTodos();

    });
  }

  deleteTodo(id: number) {
    this._todoService.deleteTodo(id).subscribe(() => {
      this.getTodos();
    })
  }

}

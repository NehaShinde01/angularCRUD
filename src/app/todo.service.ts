import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {users} from '../users';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';
  private apiUrl2= 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.apiUrl);
  }

  getTodo(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTodo(todo: any) {
    return this.http.post(this.apiUrl, todo);
  }

  updateTodo(id: number, todo: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  searchTodo(query: string) {
    return this.http.get(`${this.apiUrl}/search/${query}`);
  }
  editTodo(todo:any){
    return this.http.post(this.apiUrl, todo);
  }
  /**
   * get user list from server
   */
  getUsers() {
    return this.http.get(this.apiUrl2);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

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
}

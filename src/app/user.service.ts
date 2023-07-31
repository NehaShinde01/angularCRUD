import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl2= 'http://localhost:3000/users';


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl2);
  }

  getUser(id: number) {
    return this.http.get(`${this.apiUrl2}/${id}`);
  }

  addUser(user: any) {
    return this.http.post(this.apiUrl2, user);
  }

  updateUser(id: number, user: any) {
    return this.http.patch(`${this.apiUrl2}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl2}/${id}`);
  }

  searchUser(query: string) {
    return this.http.get(`${this.apiUrl2}/search/${query}`);
  }
  editUser(user:any){
    return this.http.post(this.apiUrl2, user);
  }
  
}

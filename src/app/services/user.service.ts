import { Injectable } from '@angular/core';
import {IUser} from "../components/IUser";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Dao',
      email: 'dao@gmail.com',
      address: 'HN',
      phone: '099009090',
      status: 1,
    },
    {
      id: 2,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Thuong',
      email: 'thuong@gmail.com',
      address: 'HN',
      phone: '0990434090',
      status: 2
    },
    {
      id: 3,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Cuong',
      email: 'cuong@gmail.com',
      address: 'HN',
      phone: '099009090',
      status: 2
    },
    {
      id: 4,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Dat',
      email: 'dat@gmail.com',
      address: 'HN',
      phone: '089009090',
    }
  ];
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.url + '/users');
  }

  add(user: IUser): Observable<any> {
    return this.http.post(environment.url + '/users', user);
  }

  findById(index: number) {
    return this.users[index];
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.url + '/users/' + id)
  }
}

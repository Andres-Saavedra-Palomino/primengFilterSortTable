import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../features/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _lista_usuarios: User[] = [
    {
      username: 'usuario 1',
      fullname: 'fullname 1',
      email: 'email 1',
      cellphoneNumber: '111 111 111',
      status: { id: 1 },
    },
    {
      username: 'usuario 2',
      fullname: 'fullname 3',
      email: 'email 3',
      cellphoneNumber: '111 111 121',
      status: { id: 2 },
    },
    {
      username: 'usuario 111',
      fullname: 'fullname 13',
      email: 'email 13',
      cellphoneNumber: '431 111 111',
      status: { id: 3 },
    },
    {
      username: 'usuario 991',
      fullname: 'fullname 321',
      email: 'email 13333',
      cellphoneNumber: '333 111 111',
      status: { id: 4 },
    },
    {
      username: 'usuario 54',
      fullname: 'aullna3me 1',
      email: 'email@de',
      cellphoneNumber: '985 111 111',
      status: { id: 1 },
    },
    {
      username: 'usuario 1946',
      fullname: 'fullname 654',
      email: 'email@tghh',
      cellphoneNumber: '888 111 111',
      status: { id: 1 },
    },
    {
      username: 'usuario 91',
      fullname: 'fullname 1',
      email: 'email 1',
      cellphoneNumber: '111 111 111',
      status: { id: 1 },
    },
    {
      username: 'usuario 92',
      fullname: 'fullname 3',
      email: 'email 3',
      cellphoneNumber: '111 111 121',
      status: { id: 1 },
    },
    {
      username: 'usuario 9111',
      fullname: 'fullname 13',
      email: 'email 13',
      cellphoneNumber: '431 111 111',
      status: { id: 1 },
    },
    {
      username: 'usuario 9991',
      fullname: 'fullname 321',
      email: 'email 13333',
      cellphoneNumber: '333 111 111',
      status: { id: 1 },
    },
    {
      username: 'usuario 954',
      fullname: 'aullna3me 1',
      email: 'email@de',
      cellphoneNumber: '985 111 111',
      status: { id: 1 },
    },
    {
      username: 'usuario 91946',
      fullname: 'fullname 654',
      email: 'email@tghh',
      cellphoneNumber: '888 111 111',
      status: { id: 1 },
    },
  ];

  constructor() {}

  getlista_usuarios(): Observable<User[]> {
    return of([...this._lista_usuarios]).pipe(delay(500));
  }
}

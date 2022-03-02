import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Status } from '../features/users/models/status.model';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  _lista_status: Status[] = [
    {
      id: 1,
      alias: 'Habilitado',
    },
    {
      id: 2,
      alias: 'Desabilitado',
    },
    {
      id: 3,
      alias: 'Suspendido',
    },
    {
      id: 4,
      alias: 'Bloqueado',
    },
  ];
  constructor() {}

  getListado(): Observable<Status[]> {
    return of(this._lista_status).pipe(delay(500));
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>('/tasks');
  }

  getTask(id: string): Observable<Task> {
    return this._http.get<Task>(`/tasks/${id}`);
  }
}

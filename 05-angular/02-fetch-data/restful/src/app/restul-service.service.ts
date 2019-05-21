import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestulServiceService {

  constructor(private http: HttpClient) { }
}
// tslint:disable-next-line: no-unused-expression
getRestulTask(TaskId: number): Observable < Restfultask > {
  return this.http.get<RestfulTask>(`https://localhost:8000/tasks/${TaskId}/`);
};

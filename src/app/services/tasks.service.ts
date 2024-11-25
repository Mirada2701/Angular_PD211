import { Injectable } from '@angular/core';
import { ITask } from '../task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://jsonplaceholder.typicode.com/todos";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) {
    
    
  }


  getAll(): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(api);
  }

  get(id: number): Observable<ITask> | null {
    return this.httpClient.get<ITask>(api + id);
  }
}

import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { ITask } from '../task';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskFormComponent } from "../task-form/task-form.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: ITask[] = []; 

  constructor(private taskService: TasksService) {    
    taskService.getAll().subscribe((data) =>
      this.tasks = data
    );
  }

  clear(){
    for(let t of this.tasks)
      console.log(t.date);
      
    
    this.tasks=[];
  }
  
  delete(id:number){
    let index = this.tasks.findIndex(x=>x.id === id) ;
    this.tasks.splice(index,1);
  }

  create(task: ITask) {
    this.tasks.push(task);
  }
}

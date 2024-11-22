import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITask, TASKS } from './task';
import { TaskCardComponent } from "./task-card/task-card.component";
import { TaskFormComponent } from "./task-form/task-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCardComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_PD211';
  name = "Vitaliy Labenskyi";
  tasks: ITask[] = TASKS;  

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

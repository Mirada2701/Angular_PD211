import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITask, TASKS } from './task';
import { TaskCardComponent } from "./task-card/task-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_PD211';
  name = "Vitaliy Labenskyi";
  tasks: ITask[] = TASKS;  

}

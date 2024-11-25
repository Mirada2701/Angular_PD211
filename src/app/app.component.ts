import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardComponent } from "./task-card/task-card.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCardComponent, TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_PD211';
  name = "Vitaliy Labenskyi";


  

}

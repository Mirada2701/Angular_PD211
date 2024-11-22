import { Component, Input } from '@angular/core';
import { ITask } from '../task';


@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})

export class TaskCardComponent {
  
  @Input()
  task: ITask = {
    checked: false,
    important: true,
    text: '',
    date: ""
  }

}

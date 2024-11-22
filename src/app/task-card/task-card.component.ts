import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../task';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task-card',
  imports: [
    DatePipe
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})

export class TaskCardComponent {
  
  @Input()
  task?: ITask;

  @Output()
  onDelete = new EventEmitter<number>();

  delete(){
    this.onDelete.emit(this.task?.id);
  }
}

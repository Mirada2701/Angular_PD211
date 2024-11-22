import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from '../task';
import { FormBuilder,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {


  taskForm;

  @Output()
  onCreate = new EventEmitter<ITask>();

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = formBuilder.group(
      {
        checked: [true],
        important: [true],
        text: [''],
        date: [new Date()]
      });
  }


  onSubmit(){
    if(!this.taskForm.valid){
      alert("Invalid data")
      return;
    }

    let task = this.taskForm.value as ITask;

    this.onCreate.emit(task);
  }
 
}
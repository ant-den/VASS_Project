import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], // Import necessary modules
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', Validators.required],
      type: ['', Validators.required],
      createdOn: [new Date(), Validators.required],
      status: ['Pending', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      console.log('Task Created:', newTask);
      this.taskForm.reset({ createdOn: new Date(), status: 'Pending' });
    }
  }
}
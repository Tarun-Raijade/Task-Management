import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.scss'],
})
export class Taskmanagement implements OnInit {
  todoForm: FormGroup;

  items: Item[] = [];
  progress: Item[] = [];
  done: Item[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required],
    });
  }

  addItem(description: string) {
    this.items.unshift({
      description,
      done: false,
    });
  }

  deleteItem(item: any) {
    this.items.splice(item, 1);
  }

  deleteProgress(item: any) {
    this.progress.splice(item, 1);
  }

  deleteDoneItem(item: any) {
    this.done.splice(item, 1);
  }

  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  resetForm() {
    this.todoForm.reset();
    }
}

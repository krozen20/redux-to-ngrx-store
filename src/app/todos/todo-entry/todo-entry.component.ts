import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todo-entry',
  template: `
    <app-todo-form
      [todo]="todo"
      (update)="onUpdate($event)">
    </app-todo-form>`,
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  todo: Todo;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.params.id;
    if (param === 'new') {
      this.todo = {
        label: '',
        complete: false,
        tags: []
      };
    } else {
      // Get todo with Id
    }
  }

  onUpdate(updatedTodo: Todo) {
    console.table(updatedTodo);
    this.router.navigate(['todos']);
  }
}

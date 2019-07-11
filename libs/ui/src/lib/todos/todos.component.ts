import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@angular-nx-example/data';

@Component({
  selector: 'angular-nx-example-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
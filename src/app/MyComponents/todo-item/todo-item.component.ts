
// import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';
// import { Todo } from 'src/app/Todo';

// @Component({
//   selector: 'app-todo-item',
//   templateUrl: './todo-item.component.html',
//   styleUrls: ['./todo-item.component.css']
// })
// export class TodoItemComponent implements OnInit {
//   // @Input() todo: Todo ;  this wont work we have to provide a default value to todo as shown below to avoid typescript compile error
//   @Input() todo: Todo = new Todo(0, '', '', false);
//   @Output() todoDelete: EventEmitter<Todo> = new EventEmitter
//   @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter


//   constructor() {
        
//   }
//   ngOnInit(): void {}

//   onClick(todo: Todo){
//     this.todoDelete.emit(todo)
//     console.log("button clicked");
    
//   }
//   onCheckboxClick(todo: Todo){
//     this.todoCheckbox.emit(todo)
//    }
// }


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo(0, '', '', false);
 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo: Todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}

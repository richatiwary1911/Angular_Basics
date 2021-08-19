import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  x = 500;
  products = 1000;

  model = new Model();

  getName(){
      return this.model.user;
  }

  getTodoItems(){
    return this.model.item.filter((item) => !item.done);
  }

  addItem(addvalue){
    return this.model.item.push(new ToDoItem(addvalue, false));
  }
}



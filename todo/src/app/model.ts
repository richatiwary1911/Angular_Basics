export class Model{

  user;
  item;

  constructor(){
    this.user = 'Adam';
    this.item = [

        new ToDoItem('Buy Flowers', false),
        new ToDoItem('Get Shoes', false),
        new ToDoItem('Collect Tickets', false),
        new ToDoItem('Call Joe', false),

    ]
  }

}

export class ToDoItem{

  action;
  done;

  constructor(action, done){
    this.action = action;
    this.done = done;
  }


}

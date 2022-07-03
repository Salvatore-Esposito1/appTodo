import { Component, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/interface/todos';
import { TodosService } from 'src/app/service/todos.service';


@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss']
})
export class ListaTodoComponent implements OnInit {

  edit = false;
  delay!: boolean;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
      this.setTime();
  }

  setTime(){
      this.delay = true;
      setTimeout(() => {
          this.delay = false;
      }, 2000);
  }


  completedTodo(todo: Todos){
    return this.todosService.getList(todo);
  }

 editTodo(todo: Todos) {
  this.todosService.getEditTodo(todo)
  return (this.edit = true);
}


saveEditTodo(todo: Todos) {
  this.todosService.getSaveEditTodo(todo)
   return (this.edit = false);
}


}

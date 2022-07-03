import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/interface/todos';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  templateUrl: './completed-page.page.html',
  styleUrls: ['./completed-page.page.scss']
})
export class CompletedPagePage implements OnInit {


  delay!: boolean;

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
      this.setTime();
  }

  setTime(){
      this.delay = true;
      setTimeout(() => {
          this.delay = false;
      }, 2000);
  }

  checkList(): number {
      return this.todosService.lengthCompletedTodoList();
  }

  remove(todo: Todos) {
      return this.todosService.deleteTodo(todo);
  }
}

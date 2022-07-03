import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/interface/todos';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  templateUrl: './todo-page.page.html',
  styleUrls: ['./todo-page.page.scss']
})
export class TodoPagePage implements OnInit {

  delay!: boolean;

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.setTime();
  }

  setTime(){
    this.delay = true;
    setTimeout(() => {
        this.delay = false;
    }, 2000);
}

  addTodo(item: string) {
    let todo: Todos = {id: 1, title: item, completed: false};
    this.todosService.newTodo(todo);
    document.querySelector<HTMLInputElement>('.textInput')!.value = ' ';
  }
}

import { Injectable } from '@angular/core';
import { Todos } from '../interface/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todos[] = [];
  private completedTodos: Todos[] = [];

  public getTodosList(parametro: boolean): Todos[] {
      return this.todos.filter(todo => parametro === todo.completed);
  }

  public getCompletedTodosList(parametro: boolean): Todos[] {
      return this.completedTodos.filter(todo => parametro === todo.completed);
  }

  public newTodo(todo: Todos): Promise<Todos[]> {
      return new Promise((res, rej) => {
          setTimeout(() => {
              this.todos.push(todo);
              todo.id = this.todos.length;
              res(this.todos);
          }, 2000);
      });
  }

  public getList(todo: Todos): Promise<Todos[]> {
      return new Promise((res, rej) => {
          setTimeout(() => {
              todo.completed = true;
              this.completedTodos.push(todo);
              todo.id = this.completedTodos.length;
              let index = this.todos.indexOf(todo, 0);
              if (index > -1) {
                  this.todos.splice(index, 1);
              }
              res(this.completedTodos);
          }, 2000);
      });
  }


  public getEditTodo(todo: Todos): Promise<Todos[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let inputForm = document.querySelector<HTMLInputElement>('.textInput');
        inputForm!.value = todo.title;
      res(this.todos);
      }, 2000);
  });
}

  public getSaveEditTodo(todo: Todos): Promise<Todos[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let inputForm = document.querySelector<HTMLInputElement>('.textInput');
        todo.title = inputForm!.value
        inputForm!.value = ' ';
        res(this.todos);
      }, 2000);
  });
}

  public deleteTodo(todo: Todos): Promise<Todos[]> {
      return new Promise((res, rej) => {
          setTimeout(() => {
              let index = this.completedTodos.indexOf(todo, 0);
              if (index > -1) {
                  this.completedTodos.splice(index, 1);
              }
              res(this.completedTodos);
          }, 1000);
      });
  }

  lengthTodoList(): number{
      return this.todos.length;
  }

  lengthCompletedTodoList(): number{
      return this.completedTodos.length;
  }
}

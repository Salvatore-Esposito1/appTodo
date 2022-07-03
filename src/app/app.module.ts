import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoPagePage } from './pages/todoPage/todo-page/todo-page.page';
import { CompletedPagePage } from './pages/completedPage/completed-page/completed-page.page';
import { ListaTodoComponent } from './components/lista-todo/lista-todo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoPagePage,
    CompletedPagePage,
    ListaTodoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

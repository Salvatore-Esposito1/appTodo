import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedPagePage } from './pages/completedPage/completed-page/completed-page.page';
import { TodoPagePage } from './pages/todoPage/todo-page/todo-page.page';

const routes: Routes = [
  {
    path: 'TodoPage',
    component: TodoPagePage
  },
  {
    path: 'CompletedPage',
    component: CompletedPagePage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'TodoPage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

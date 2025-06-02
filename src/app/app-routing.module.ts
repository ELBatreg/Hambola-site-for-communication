import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostFormComponent } from './component/post-form/post-form.component';

const routes: Routes = [
  { path: '', component: PostListComponent },      
  { path: 'post-form', component:     PostFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';
import { OutPutInputComponent } from './component/demo/out-put-input/out-put-input.component';
import { ParentComponent } from './component/demo/outPut-input/parent/parent.component';
import { ChildComponent } from './component/demo/outPut-input/child/child.component';
import { UserDataComponent } from './component/card/user-data/user-data.component';
import { PostContentComponent } from './component/card/post-content/post-content.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AddPostComponent } from './pages/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    OutPutInputComponent,
    ParentComponent,
    ChildComponent,
    UserDataComponent,
    PostContentComponent,
    PostFormComponent,
    PostListComponent,
    TruncatePipe,
    AddPostComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        RouterModule, 

FormsModule,
    ReactiveFormsModule ,
[HttpClientModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

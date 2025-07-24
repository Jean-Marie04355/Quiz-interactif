import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question.component';
import { ResultComponent } from './result.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    QuizComponent,
    QuestionComponent,
    ResultComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 
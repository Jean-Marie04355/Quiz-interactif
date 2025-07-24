import { Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ResultComponent } from './result.component';
import { QuestionComponent } from './question.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'quiz', component: QuestionComponent },
  { path: 'result', component: ResultComponent }
];

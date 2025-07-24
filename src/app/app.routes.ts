import { Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ResultComponent } from './result.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];

import { Component } from '@angular/core';
import { QuestionComponent } from './question.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(private router: Router) {}

  commencerQuiz() {
    this.router.navigate(['/quiz']);
  }
} 
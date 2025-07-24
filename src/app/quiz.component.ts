import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  constructor(private router: Router) {}

  commencerQuiz() {
    this.router.navigate(['/quiz']);
  }
} 
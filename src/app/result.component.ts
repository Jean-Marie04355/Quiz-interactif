import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  score = 0;
  total = 0;
  message = '';
  percent = 0;

  constructor(private quizService: QuizService, private router: Router) {
    this.total = this.quizService.getTotalQuestions();
    this.score = this.calculateScore();
    this.percent = Math.round((this.score / this.total) * 100);
    this.message = this.getMessage();
  }

  calculateScore(): number {
    const answers = this.quizService.getUserAnswers();
    let score = 0;
    for (let i = 0; i < this.total; i++) {
      if (answers[i] === this.quizService['questions'][i].answer) {
        score++;
      }
    }
    return score;
  }

  getMessage(): string {
    const ratio = this.score / this.total;
    if (ratio === 1) return '🎉 Parfait ! Vous êtes un(e) champion(ne) du quiz !';
    if (ratio >= 0.7) return '👏 Bravo ! Très bon score !';
    if (ratio >= 0.4) return 'Pas mal ! Vous pouvez faire encore mieux.';
    return 'Courage ! Recommencez pour améliorer votre score.';
  }

  getScoreColor(): string {
    if (this.percent === 100) return '#22c55e'; // vert
    if (this.percent >= 70) return '#6366f1'; // bleu
    if (this.percent >= 40) return '#f59e42'; // orange
    return '#ef4444'; // rouge
  }

  restart() {
    this.quizService.resetQuiz();
    this.router.navigate(['/quiz']);
  }
} 
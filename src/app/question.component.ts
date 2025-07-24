import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  selectedOption: number | null = null;

  constructor(public quizService: QuizService, private router: Router) {}

  get question() {
    return this.quizService.getCurrentQuestion();
  }

  get currentIndex() {
    return this.quizService.getCurrentIndex();
  }

  get totalQuestions() {
    return this.quizService.getTotalQuestions();
  }

  selectOption(index: number) {
    this.selectedOption = index;
    this.quizService.answerQuestion(index);
  }

  next() {
    if (this.quizService.isLastQuestion()) {
      this.router.navigate(['/result']);
    } else {
      this.quizService.nextQuestion();
      this.selectedOption = this.quizService.getUserAnswers()[this.quizService.getCurrentIndex()] ?? null;
    }
  }

  previous() {
    this.quizService.previousQuestion();
    this.selectedOption = this.quizService.getUserAnswers()[this.quizService.getCurrentIndex()] ?? null;
  }
} 
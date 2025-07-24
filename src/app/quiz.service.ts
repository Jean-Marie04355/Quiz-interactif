import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  answer: number; // index de la bonne réponse
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private questions: Question[] = [
    {
      question: 'Quelle est la capitale de la France ?',
      options: ['Paris', 'Londres', 'Berlin', 'Madrid'],
      answer: 0
    },
    {
      question: 'Combien y a-t-il de continents sur Terre ?',
      options: ['4', '5', '6', '7'],
      answer: 3
    },
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Atlantique', 'Indien', 'Arctique', 'Pacifique'],
      answer: 3
    },
    {
      question: 'Qui a écrit "Les Misérables" ?',
      options: ['Victor Hugo', 'Émile Zola', 'Molière', 'Albert Camus'],
      answer: 0
    },
    {
      question: 'Quelle est la formule chimique de l’eau ?',
      options: ['CO2', 'H2O', 'O2', 'NaCl'],
      answer: 1
    },
    {
      question: 'Quel est le plus grand pays du monde ?',
      options: ['Chine', 'États-Unis', 'Russie', 'Canada'],
      answer: 2
    },
    {
      question: 'Combien de couleurs y a-t-il dans un arc-en-ciel ?',
      options: ['5', '6', '7', '8'],
      answer: 2
    },
    {
      question: 'Quel est l’organe principal de la respiration ?',
      options: ['Le cœur', 'Le foie', 'Le poumon', 'Le rein'],
      answer: 2
    },
    {
      question: 'Dans quel pays se trouve la ville de Tokyo ?',
      options: ['Chine', 'Japon', 'Corée du Sud', 'Thaïlande'],
      answer: 1
    },
    {
      question: 'Quel est le symbole chimique du fer ?',
      options: ['Fe', 'Ir', 'In', 'Fr'],
      answer: 0
    }
  ];

  private userAnswers: number[] = [];
  private currentIndex = 0;

  getCurrentQuestion(): Question {
    return this.questions[this.currentIndex];
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  answerQuestion(optionIndex: number) {
    this.userAnswers[this.currentIndex] = optionIndex;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  isLastQuestion(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }

  getUserAnswers(): number[] {
    return this.userAnswers;
  }

  resetQuiz() {
    this.userAnswers = [];
    this.currentIndex = 0;
  }
} 
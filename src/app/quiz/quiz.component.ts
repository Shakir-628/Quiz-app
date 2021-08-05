import { QuizService } from './../shared/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router : Router, private quizService : QuizService) { }

  ngOnInit(): void {
    // this.quizService.seconds = 0;
    // this.quizService.qnProgress = 0;
    // this.quizService.getQuestions().subscribe(
    //   (data: any) => {
    //     this.quizService.qns = data;
    //     //this.startTimer();
    // });
  }

  // startTimer() {
  //   this.quizService.timer = setInterval(() => {
  //     this.quizService.seconds++;
  //   },1000)
  // }
}

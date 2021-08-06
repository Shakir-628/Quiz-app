import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  readonly rootURL = 'http://localhost:53693';
  qns!: any[];
  seconds: any;
  timer : any;
  qnProgress!: number;
  correctAnswerCount: number = 0;

  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem("participants") || '{}');
    return participant.Name;
  }

  insertParticipant(name:string,email:string)
  {
    var body = {
      Name : name,
      Email : email
    }
    return this.http.post(this.rootURL + '/api/InsertParticipant', body);
  }

  getQuestions(){
    return this.http.get(this.rootURL + '/api/Questions');
  }

  getAnswers(){
    debugger;
    var body = this.qns.map(x => x.QnID);
    return this.http.post(this.rootURL + '/api/Answers',body);
  }

  submitScore() {
    var body = JSON.parse(localStorage.getItem('participants') || '{}');
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootURL + "/api/UpdateParticipant", body);
  }

}

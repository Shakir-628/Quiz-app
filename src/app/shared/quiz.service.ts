import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  readonly rootURL = 'http://localhost:53693';
  qns!: any[];
  seconds!: number;
  timer : any;
  qnProgress!: number;

  constructor(private http: HttpClient) { }

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
}

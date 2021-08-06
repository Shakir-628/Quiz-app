import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'quiz', component: QuizComponent , canActivate : [AuthGuard]},
  {path: 'result', component: ResultComponent , canActivate : [AuthGuard]},
  {path:'',redirectTo:'/register',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './features/login/login/login';
import { Textbox } from '../textbox/textbox';
import { EmpMangement } from './features/dashboard/emp-mangement/emp-mangement';

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular_banking_dashboard';
}
// imports: [RouterOutlet,Login,Textbox,EmpMangement]
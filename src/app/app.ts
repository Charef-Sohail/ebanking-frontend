import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, ReactiveFormsModule],
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private authService: Auth) {}

  ngOnInit() {
    this.authService.loadJwtTokeFromLocalStorage();
  }

  protected readonly title = signal('ebanking-frontend');
}

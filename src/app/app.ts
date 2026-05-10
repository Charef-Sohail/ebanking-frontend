import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Navbar,
    RouterOutlet,
  HttpClientModule,
  ReactiveFormsModule],
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ebanking-frontend');
}

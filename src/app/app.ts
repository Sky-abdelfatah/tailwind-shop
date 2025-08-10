import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Foot } from './foot/foot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Foot],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'tailwind';
}

import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Catergioes } from './components/catergioes/catergioes';
import { Footer } from './components/footer/footer';
import { Carosuel } from './components/carosuel/carosuel';
import { Body } from './components/body/body';
import { Databinding } from './components/databinding/databinding';
import { Assingment1 } from './components/assingment1/assingment1';

@Component({
  selector: 'app-root',
  imports: [Navbar, Catergioes, Footer, Carosuel, Body, Databinding, Assingment1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project1');
}

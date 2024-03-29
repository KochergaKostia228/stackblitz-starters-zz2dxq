import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HobbyComponent } from './app/hobby/hobby.component';
import { ResumeComponent } from './app/resume/resume.component';
import { InfoComponent } from './app/resume/info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HobbyComponent,ResumeComponent,InfoComponent],
  template: `
    <app-resume/><br>
    <br>
    <a href="https://github.com/KochergaKostia228/stackblitz-starters-zz2dxq">https://github.com/KochergaKostia228/stackblitz-starters-zz2dxq</a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

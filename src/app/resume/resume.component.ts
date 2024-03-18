import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { PhotoComponent } from './photo/photo.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [InfoComponent, PhotoComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}

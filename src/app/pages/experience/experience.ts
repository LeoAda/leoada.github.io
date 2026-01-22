import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Section, SectionItem } from '../../components/section/section';
import { experiences } from './experience.data';
@Component({
  selector: 'app-experience',
  imports: [MatDividerModule, Section],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: SectionItem[] = experiences;
}

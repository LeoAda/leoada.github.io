import { Component, Input } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { SectionItem } from '../../components/section/section';
import { ProjectPanel } from "../project-panel/project-panel";
@Component({
  selector: 'app-project-section',
  imports: [MatDividerModule, MatExpansionModule, MatIconModule, ProjectPanel],
  templateUrl: './project-section.html',
  styleUrl: './project-section.scss',
})
export class ProjectSection {
  @Input() projects: SectionItem[] = []
}

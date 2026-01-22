import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { SectionItem } from '../../components/section/section';
import { ProjectSection } from "../../components/project-section/project-section";
import { personnalProjects, schoolProjects, workProjects } from './projects.data';
@Component({
  selector: 'app-projects',
  imports: [MatDividerModule, MatExpansionModule, MatIconModule, ProjectSection],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  personnalProjects: SectionItem[] = personnalProjects;
  workProjects: SectionItem[] = workProjects
  schoolProjects: SectionItem[] = schoolProjects;
}

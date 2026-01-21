import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Section, SectionItem } from '../../components/section/section';

@Component({
  selector: 'app-education',
  imports: [MatDividerModule, Section],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationItem: SectionItem = {
    title: 'Engineering Degree in Computer Science, Big Data Specialization',
    location: 'ISEN Lille',
    date: '2019 - 2023',
    description: 'Graduate School of Engineering in High Technologies and Digital',
    tags: [
      'Innovation Management',
      'Databases',
      'Statistics',
      'Java',
      'Python',
      'Data Reporting (R Language)',
      'Artificial Intelligence',
      'Project Management',
      'Signal Analysis',
      'Metaheuristics',
    ],
    details: [],
  };

  certificationItem: SectionItem = {
    title: 'B2 First - Score 164',
    location: 'Cambridge English',
    date: 'Jun 2021',
    description: '',
    tags: [],
    details: [],
  };
}

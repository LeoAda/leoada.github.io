import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Section, SectionItem } from '../../components/section/section';
import { educationItem, certificationItem } from './education.data';
@Component({
  selector: 'app-education',
  imports: [MatDividerModule, Section],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationItem: SectionItem = educationItem;
  certificationItem: SectionItem = certificationItem;
}

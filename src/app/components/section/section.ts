import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

export class SectionItem {
  title: string = '';
  location: string = '';
  date: string = ''
  description: string = '';
  tags: string[] = [];
  details: string[] = [];
}

@Component({
  selector: 'app-section',
  imports: [MatChipsModule],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  @Input() sectionItem: SectionItem = new SectionItem();
}

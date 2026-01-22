import { Component, Input,signal } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { SectionItem, Section } from '../../components/section/section';

@Component({
  selector: 'app-project-panel',
  imports: [MatDividerModule, MatExpansionModule, MatIconModule, Section],
  templateUrl: './project-panel.html',
  styleUrl: './project-panel.scss',
})
export class ProjectPanel {
  @Input() project: SectionItem = {} as SectionItem;
  readonly panelOpenState = signal(false);
}

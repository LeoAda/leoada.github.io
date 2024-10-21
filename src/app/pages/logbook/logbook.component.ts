import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { logbookPosts } from '../../registry/logbook-posts';
import { RouterModule } from '@angular/router';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  selector: 'app-logbook',
  standalone: true,
  imports: [CommonModule, RouterModule, PostCardComponent],
  templateUrl: './logbook.component.html',
  styleUrl: './logbook.component.scss'
})
export class LogbookComponent {
  logbookPosts = logbookPosts;

}

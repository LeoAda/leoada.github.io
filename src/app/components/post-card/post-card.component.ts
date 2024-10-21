import { Component, Input } from '@angular/core';
import { Post } from '../../registry/blog-post';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'post-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post!: Post
  @Input() route!: string
  constructor(private router: Router) {
  }

  navigateTo($event: any, route: string, id: string) {
    this.router.navigate([route, id]);
  }
}

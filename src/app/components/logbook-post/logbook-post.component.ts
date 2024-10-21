import { Component, inject } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';
import { logbookPosts, Post } from '../../registry/logbook-posts';
@Component({
  selector: 'app-logbook-post',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './logbook-post.component.html',
  styleUrl: './logbook-post.component.scss'
})
export class LogbookPostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postId: string = this.route.snapshot.params['id'];

  post?: Post = logbookPosts.find((post) => post.id === this.postId);
}

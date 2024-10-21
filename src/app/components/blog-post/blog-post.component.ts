import { Component, inject } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';
import { blogPosts, Post } from '../../registry/blog-post';
@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postId: string = this.route.snapshot.params['id'];

  post?: Post = blogPosts.find((post) => post.id === this.postId);
}

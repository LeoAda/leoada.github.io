import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blogPosts } from '../../registry/blog-post';
import { RouterModule } from '@angular/router';
import { PostCardComponent } from '../../components/post-card/post-card.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, PostCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogPosts = blogPosts;

}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CvComponent } from './pages/cv/cv.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LogbookComponent } from './pages/logbook/logbook.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { LogbookPostComponent } from './components/logbook-post/logbook-post.component';


export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: HomeComponent, title: 'About' },
  { path: 'cv', component: CvComponent, title: 'CV' },
  { path: 'blog', component: BlogComponent, title: 'Blog' },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'logbook', component: LogbookComponent, title: 'Logbook' },
  { path: 'logbook/:id', component: LogbookPostComponent },
];

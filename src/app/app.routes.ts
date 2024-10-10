import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CvComponent } from './pages/cv/cv.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LogbookComponent } from './pages/logbook/logbook.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: HomeComponent, title: 'About' },
  { path: 'cv', component: CvComponent, title: 'CV' },
  { path: 'blog', component: BlogComponent, title: 'Blog' },
  { path: 'logbook', component: LogbookComponent, title: 'Logbook' },
];

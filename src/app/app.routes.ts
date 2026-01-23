import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Education } from './pages/education/education';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: '', component: About },
  { path : 'experience', component: Experience },
  { path  : 'education', component: Education },
  { path: 'projects', component: Projects },
];

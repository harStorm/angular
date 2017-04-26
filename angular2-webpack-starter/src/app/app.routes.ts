import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'home',  component: CoursesComponent },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];

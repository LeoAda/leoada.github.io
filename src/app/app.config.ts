import {
  ApplicationConfig,
  Injectable,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, Title } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Leo A.D.A | ${title}`);
    }
  }
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};

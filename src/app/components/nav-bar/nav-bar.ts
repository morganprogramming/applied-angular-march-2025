import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NavBarStartComponent } from './components/nav-bar-start';
import { NavBarCenterComponent } from './components/nav-bar-center';
import { NavBarEndComponent } from './components/nav-bar-end';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavBarStartComponent, NavBarCenterComponent, NavBarEndComponent],
  template: ` <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <!-- This was refactored -->
      <app-nav-bar-start />
    </div>
    <div class="navbar-center hidden lg:flex">
      <app-nav-bar-center [links]="navigationLinks()" />
    </div>
    <div class="navbar-end">
      <app-nav-bar-end />
    </div>
  </div>`,
  styles: ``,
})
export class NavBarComponent {
  favoriteFood = signal('Burritos');
  navigationLinks = signal([
    {
      href: '',
      label: 'Home',
    },
    {
      href: 'demos',
      label: 'Demos',
    },
  ]);
}

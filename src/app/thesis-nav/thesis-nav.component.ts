import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-thesis-nav',
  templateUrl: './thesis-nav.component.html',
  styleUrls: ['./thesis-nav.component.scss']
})
export class ThesisNavComponent {
  public menuLinks = [
    { path: 'home', label: 'Home' },
    { path: 'users', label: 'Users' },
    { path: 'organization', label: 'Organization' },
    { path: 'product', label: 'Product' },
    { path: 'receipt', label: 'Receipt' },
    { path: 'service', label: 'Service' }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}

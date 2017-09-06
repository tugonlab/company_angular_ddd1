import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcrumbs',
  template: `
  <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>

    <li class="breadcrumb-item"
        [ngClass]="{active: last}">
      <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label}}</a>
      <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label}}</span>
    </li>
  </ng-template>`
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Array<Object>;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
      url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            var arr = routeSnapshot.url.map(segment => segment.path);
            this.breadcrumbs.push({
                label: arr[arr.length-1],
                url:   url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }
}

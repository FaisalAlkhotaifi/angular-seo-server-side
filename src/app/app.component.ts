import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { MetaService } from './services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-seo-server-side';
  
  constructor(
    private _router: Router,
    private _metaService: MetaService,
  ){}

  ngOnInit(): void {
    this._router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
      map((x) => x.urlAfterRedirects),
      tap((data: string) => this._metaService.updateMetaTags(data))
    ).subscribe()
  }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DumyInterceptor implements HttpInterceptor {
    constructor(private _route: ActivatedRoute, private _router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('route >> id from interceptor:', this._route.snapshot.paramMap.get('id'));
        console.log('routerState url:', this._router.routerState.snapshot.url);

        console.log('url segments:', this._router.routerState.snapshot.url.split('/'));

        if (typeof window !== 'undefined') {
            console.log('windos segments:', window.location.href.split('/'));
        }


        return next.handle(req);
    }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  
  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _metaService: MetaService) {}

  ngOnInit(): void {
    console.log('id:', this._route.snapshot.paramMap.get('id'));

    this._http.get<{name: string}>('http://localhost:3002/dumy/byId').subscribe({
      next: (response) => {
        console.log('response:', response);

        this._metaService.updateTags({title: response.name});
      }
    })
  }
  
}

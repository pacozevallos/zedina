import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public close = false;
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close = !this.close;
    console.log('this.close', this.close);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input() userName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

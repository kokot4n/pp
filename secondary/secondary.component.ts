import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {
  @Input() userAge!: number;
  @Output() onChanged = new EventEmitter<boolean>();
  change(increased:any) {
      this.onChanged.emit(increased);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

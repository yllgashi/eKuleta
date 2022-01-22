import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input('clickable') clickable: boolean;
  @Output() clickOut = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.clickOut.next();
  }
}

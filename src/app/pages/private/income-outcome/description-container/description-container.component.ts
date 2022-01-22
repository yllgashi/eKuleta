import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-container',
  templateUrl: './description-container.component.html',
  styleUrls: ['./description-container.component.scss'],
})
export class DescriptionContainerComponent implements OnInit {
  @Input('isOutcome') isOutcome: boolean;
  constructor() { }

  ngOnInit() {}

}

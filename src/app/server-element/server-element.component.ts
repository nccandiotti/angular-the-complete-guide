import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit {
  // when put something in parans of input, it's an alias. now in HTML MUST bind to th alias (aka element will no longer work, must be srvElement) - how you bind to a property name outside of the component
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}

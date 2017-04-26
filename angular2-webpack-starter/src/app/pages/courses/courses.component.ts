import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../app.animations';

@Component({
  selector: 'courses',  // <courses></courses>
  styleUrls: [ './courses.component.css' ],
  templateUrl: './courses.component.html',
  animations: [routerTransition().left()],
  host: {'[@routerTransition]': ''}
})
export class CoursesComponent {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor () {
    // empty
  }
}

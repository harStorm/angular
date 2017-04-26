import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/index';
import { routerTransition } from '../../app.animations';

@Component({
  selector: 'login',  // <login></login>
  styleUrls: [ './login.component.css' ],
  templateUrl: './login.component.html',
  animations: [routerTransition().top()],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent {
  private model: any = {};
  private loading = false;
  private errorLogin = 'hide';

  constructor ( 
    private router: Router,
    private authenticationService: AuthenticationService,
    private renderer: Renderer ) { }

  private login() {
    this.loading = true;
    if ( this.authenticationService.login(this.model.username, this.model.password) ) {
      this.router.navigate(['home']);
    } else {
      this.errorLogin = '';
    }
  }
}

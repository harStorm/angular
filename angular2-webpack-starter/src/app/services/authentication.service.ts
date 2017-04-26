import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor() { }

    public login(username: string, password: string) {
        if (username == 'admin' && password == 'admin') {
          localStorage.setItem('currentUser', JSON.stringify({
            userName : username,
            userPassword : password
          }));
          
          return true;
        } 

        return false;
    }

    public logout() {
        localStorage.removeItem('currentUser');
    }
}
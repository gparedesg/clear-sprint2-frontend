import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Login } from './login';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = `${environment.endpoint}/users`;
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json().errors);
  }


  constructor(
    private http: Http,
    private _router: Router
) { }

  signIn(user: Login): Promise<any> {
    return this.http
      .post(this.loginUrl, { user: user })
      .toPromise()
      .then((res: Response) => res.json().user)
      .catch(this.handleError);
  }

}

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Contract } from './contract';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private contractsUrl = `${environment.endpoint}/contracts/`;
  private personUrl = `${environment.endpoint}/users/`;
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json().errors);
  }


  constructor(
    private http: Http,
    private _router: Router
) { }

  getContracts(): Promise<any> {
    return this.http
      .get(this.contractsUrl)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);
  }

  getPerson(url): Promise<any> {
    return this.http
      .get(url)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);
  }

}

import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'
import { Contract } from './contract'
import { Person } from './person'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contracts: Contract[];
  contract: Contract;
  person: Person;
  showKitty: boolean;

  constructor(
    private _contract: HomeService
  ) { }

  ngOnInit() {
  	this.contracts = [];
  	this.contract = new Contract();
    this.person = new Person();
    this.showKitty = false;
  }

  getContracts() {
    this._contract.getContracts().then(response => {
      this.contracts = response.results; // TO-DO FIX .results
    }).catch(errors => {
      if (errors) {
        for (let error of errors) {
          console.error(error);
        }
      }
    });
  }

  getPerson(owner){
    this.showKitty=true;
    this._contract.getPerson(owner).then(response => {
      this.person = response;
    }).catch(errors => {
      if (errors) {
        for (let error of errors) {
          console.error(error);
        }
      }
    });
  }


}

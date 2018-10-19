import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'
import { Contract } from './contract'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contracts: Contract[];
  contract: Contract;

  constructor(
    private _contract: HomeService
  ) { }

  ngOnInit() {
  	this.contracts = [];
  	this.contract = new Contract();
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

  getContract(){
    
  }


}

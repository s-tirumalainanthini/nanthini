import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.page.html',
  styleUrls: ['./countrylist.page.scss'],
})
export class CountrylistPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  Atlanta(){
    this.router.navigate(['atlanta',{}]);
  }
  Boston(){
    this.router.navigate(['boston',{}]);
  }
  NewYork(){
    this.router.navigate(['newyork',{}]);
  }
  Colombus(){
    this.router.navigate(['colombus',{}]);
  }
  Denver(){
    this.router.navigate(['denver',{}]);
  }
  Houston(){
    this.router.navigate(['houston',{}]);
  }
  LosAngeles(){
    this.router.navigate(['losangeles',{}]);
  }
  Louisville(){
    this.router.navigate(['louisville',{}]);
  }
  Miami(){
    this.router.navigate(['miami',{}]);
  }
  Portland(){
    this.router.navigate(['portland',{}]);
  }
  Rayleigh(){
    this.router.navigate(['rayleigh',{}]);
  }
  Tucson(){
    this.router.navigate(['tucson',{}]);
  }


}

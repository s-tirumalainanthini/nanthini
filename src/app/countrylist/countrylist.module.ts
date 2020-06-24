import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountrylistPageRoutingModule } from './countrylist-routing.module';

import { CountrylistPage } from './countrylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountrylistPageRoutingModule
  ],
  declarations: [CountrylistPage]
})
export class CountrylistPageModule {}

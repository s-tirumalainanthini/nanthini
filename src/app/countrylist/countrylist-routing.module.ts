import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrylistPage } from './countrylist.page';

const routes: Routes = [
  {
    path: '',
    component: CountrylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountrylistPageRoutingModule {}

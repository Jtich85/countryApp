import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'countries-bycapitalpage',
  templateUrl: './byCapitalPage.component.html',
  styleUrl: './byCapitalPage.component.css',
})
export class ByCapitalPageComponent {

  searchByCapital( term: string): void {
    console.log('Desde by Capital');
    console.log( { term } );
  }

}

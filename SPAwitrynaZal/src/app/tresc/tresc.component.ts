import { Component, OnInit } from '@angular/core';
import { Dane } from '../dane';

@Component({
  selector: 'app-tresc',
  templateUrl: './tresc.component.html',
  styleUrls: ['./tresc.component.scss']
})
export class TrescComponent implements OnInit {

  Bialogora: Dane = {
    id: 1,
    nazwa: 'Dom Wypoczynkowy Mikołaj',
    adres: 'Słoneczna 17, Białogóra (Polska)',
    telefon: 555666777
  }

  constructor() { }

  ngOnInit(): void {
  }

}

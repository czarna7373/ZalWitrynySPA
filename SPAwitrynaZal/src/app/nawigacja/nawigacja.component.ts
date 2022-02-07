import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nawigacja',
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.scss'],
})
export class NawigacjaComponent implements OnInit {
  title = 'Studio Urody „Czerwony Pazur”'
  constructor() { }

  ngOnInit(): void {
  }

}


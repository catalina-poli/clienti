import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';


@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss'],
})
export class clientiComponent implements OnInit {

  collapsed = true; // Presupunem că vrem să ținem evidența stării collapsed a elementului

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    // Aici poți adăuga orice logică suplimentară necesară pentru a gestiona colapsarea
  }
}

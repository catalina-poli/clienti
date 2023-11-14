import { Component } from '@angular/core';

@Component({
  selector: 'app-setari',
  templateUrl: './setari.component.html',
  styleUrls: ['./setari.component.scss']
})
export class SetariComponent {

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

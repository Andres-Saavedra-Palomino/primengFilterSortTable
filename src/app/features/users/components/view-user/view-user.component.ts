import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'png-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Informacion Basica', routerLink: 'info' },
      { label: 'Roles' },
      { label: 'Finalizar' },
    ];
  }
}

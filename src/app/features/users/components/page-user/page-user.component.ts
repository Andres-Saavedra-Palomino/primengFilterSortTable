import { Component, OnInit } from '@angular/core';
import { pipe, take } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'png-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css'],
})
export class PageUserComponent implements OnInit {
  lista_usuarios: User[];
  selectAll!: boolean;
  selectedUsers: User[] = [];
  totalRecords: number;
  constructor(private readonly usersService: UsersService) {
    this.lista_usuarios = this.usersService._lista_usuarios;
    this.totalRecords = usersService._lista_usuarios.length;
  }

  ngOnInit(): void {}

  onSelectionChange(event: User[]) {
    this.selectAll = event.length === this.totalRecords;
    this.selectedUsers = event;
  }

  onSelectAllChange(event: any) {
    this.selectAll = event.checked;

    if (event.checked) {
      this.usersService
        .getlista_usuarios()
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            this.selectedUsers = res;
            this.selectAll = true;
          },
        });
    } else {
      this.selectedUsers = [];
      this.selectAll = false;
    }
  }
}

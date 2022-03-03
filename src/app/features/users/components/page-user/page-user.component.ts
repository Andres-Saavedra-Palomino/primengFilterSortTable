import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { pipe, take } from 'rxjs';
import { StatusService } from 'src/app/services/status.service';
import { UsersService } from 'src/app/services/users.service';
import { Status } from '../../models/status.model';
import { User } from '../../models/user.model';
@Component({
  selector: 'png-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css'],
  providers: [MessageService],
})
export class PageUserComponent {
  lista_usuarios: User[];
  listado_status: Status[];
  selectAll!: boolean;
  selectedUsers: User[] = [];
  totalRecords: number;

  key: string = 'u';
  msg: Message = {
    severity: 'success',
    summary: 'sumary',
    detail: 'detail',
    sticky: true,
    closable: false,
    key: this.key,
  };
  position: string = 'top-right';

  constructor(
    private readonly usersService: UsersService,
    private readonly statusService: StatusService,
    private readonly messageService: MessageService
  ) {
    this.lista_usuarios = this.usersService._lista_usuarios;
    this.totalRecords = usersService._lista_usuarios.length;
    this.listado_status = this.statusService._lista_status;
  }

  showToast() {
    this.messageService.add(this.msg);
  }
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

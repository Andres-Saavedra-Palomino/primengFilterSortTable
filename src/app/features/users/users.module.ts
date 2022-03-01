import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

import { UsersRoutingModule } from './users-routing.module';
import { PageUserComponent } from './components/page-user/page-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

@NgModule({
  declarations: [PageUserComponent, ViewUserComponent],
  imports: [
    CommonModule,
    RippleModule,
    TableModule,
    ButtonModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}

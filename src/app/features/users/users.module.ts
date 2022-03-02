import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';

import { UsersRoutingModule } from './users-routing.module';
import { PageUserComponent } from './components/page-user/page-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageUserComponent, ViewUserComponent],
  imports: [
    CommonModule,
    RippleModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    UsersRoutingModule,
    SharedModule,
  ],
})
export class UsersModule {}

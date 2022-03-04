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
import { ToastModule } from 'src/app/shared/toast/toast.module';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormInfoUserComponent } from './components/form-info-user/form-info-user.component';

@NgModule({
  declarations: [PageUserComponent, ViewUserComponent, FormInfoUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RippleModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    UsersRoutingModule,
    SharedModule,
    ToastModule,
    InputTextModule,
    StepsModule,
    DynamicDialogModule,
  ],
})
export class UsersModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInfoUserComponent } from './components/form-info-user/form-info-user.component';
import { PageUserComponent } from './components/page-user/page-user.component';

const routes: Routes = [
  {
    path: '',
    component: PageUserComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: FormInfoUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

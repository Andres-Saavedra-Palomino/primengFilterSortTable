import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastModule as tm } from 'primeng/toast';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, tm],
  exports: [ToastComponent],
})
export class ToastModule {}

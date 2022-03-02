import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconStatusDirective } from './directives/icon-status.directive';
import { TableHeaderThemeDirective } from './directives/table-header-theme.directive';

@NgModule({
  declarations: [IconStatusDirective, TableHeaderThemeDirective],
  exports: [IconStatusDirective, TableHeaderThemeDirective],
  imports: [CommonModule],
})
export class SharedModule {}

import { DisableControlDirective } from './disable-constrol.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [DisableControlDirective],
  imports: [CommonModule],
  exports: [DisableControlDirective]
})
export class DisableControlModule{}

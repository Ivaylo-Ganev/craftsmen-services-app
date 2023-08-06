import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PasswordDirective } from './validators/password.directive';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    PasswordDirective,
    SlicePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    PasswordDirective,
    SlicePipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PasswordDirective } from './validators/password.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    PasswordDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    PasswordDirective
  ]
})
export class SharedModule { }

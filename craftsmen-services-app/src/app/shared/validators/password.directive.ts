import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { matchPasswordValidator } from './match-password-validator';

@Directive({
  selector: '[appPassword]',
  providers: [
    {
     provide: NG_VALIDATORS,
     useExisting: PasswordDirective,
     multi: true
    }
   ]
})
export class PasswordDirective implements Validator{
  @Input() appPassword: string[] = [];
  validator: ValidatorFn = () => null;

  constructor() { 
  }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
      this.validator = matchPasswordValidator(this.appPassword[0], this.appPassword[1]);
      return this.validator(control);
    }

}

import { ValidatorFn, FormGroup} from '@angular/forms';

export function matchPasswordValidator(passwordOne: string, passwordTwo: string): ValidatorFn {
    return (control) => {
        let group = control as FormGroup;
        let passOne = group.controls[passwordOne];
        let passTwo = group.controls[passwordTwo];
        
        return passOne?.value === passTwo?.value 
        ? null 
        : {matchPasswordValidator: true}
    }

}
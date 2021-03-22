import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CheckPassValidator {
    static checkPass(controlName: string, matchingControlName: string) {
        return (fb: FormGroup) => {

            const control = fb.controls[controlName];
            const matchingControl = fb.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }

            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'abhilash')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        })
    }
}
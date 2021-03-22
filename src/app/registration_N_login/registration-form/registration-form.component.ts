import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CheckPassValidator } from './checkPass.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._]+@[a-zA-Z]+[.][a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cnf_password: ['', [Validators.required, Validators.minLength(8)]],
      dob: ['', [Validators.required]],
      gender: []
    }, {
      validator: CheckPassValidator.checkPass('password', 'cnf_password')
    });
  }

  genders: string[] = ['MALE', 'FEMALE']

  get firstname() { return this.registrationForm.get('firstname'); }
  get lastname() { return this.registrationForm.get('lastname'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get cnf_password() { return this.registrationForm.get('cnf_password'); }
  get dob() { return this.registrationForm.get('dob'); }
  get gender() { return this.registrationForm.get('gender'); }

  log(x) {
    console.log(x.value);
  }

  submit(form) {
    console.log(form.value);
  }
}
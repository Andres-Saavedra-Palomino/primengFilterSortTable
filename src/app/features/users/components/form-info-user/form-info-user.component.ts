import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'png-form-info-user',
  templateUrl: './form-info-user.component.html',
  styleUrls: ['./form-info-user.component.css'],
})
export class FormInfoUserComponent {
  userForm: FormGroup | any;
  constructor() {
    this.userForm = new FormGroup({
      names: new FormControl(),
      firstSurname: new FormControl(),
      secondSurname: new FormControl(),
      username: new FormControl(),
      domain: new FormControl(),
      email: new FormControl(),
      postalCode: new FormControl(),
      phoneNumber: new FormControl(),
      status: new FormControl(),
      startDate: new FormControl(),
      endingDate: new FormControl(),
      hasForgottenPassword: new FormControl(),
      isChangingPasswordOnFirstLogIn: new FormControl(),
      isPasswordCreatedAutomatically: new FormControl(),
      sentUsernameAndPasswordTo: new FormControl(),
    });
  }
}

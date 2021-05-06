import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  loginGroup = new FormGroup({
    email: new FormControl(),
    identifier: new FormControl(),
  });


  onSubmit() {
    console.warn(this.loginGroup.value);

  }
}

import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  response: any;

  constructor(private _loginService: LoginService,
              private formBuilder: FormBuilder) {
    this.submitted = false;
    this.loading = false;
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this._loginService.auth().subscribe(res => {
      this.loading = false;
      this.response = res;
    });
  }

}

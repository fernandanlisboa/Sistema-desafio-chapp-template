import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<Admin>();
  public form: FormGroup;

  public user: Admin = {email: '', password: ''};

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public ngOnInit(): void {}

  public login(): void {
    if (this.form.valid) {
      this.user.email = this.form.controls.email.value;
      this.user.password = this.form.controls.password.value;
      this.sendLoginForm.emit(this.user);
    }
  }
}

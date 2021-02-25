import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {
  @Output() sendSignForm = new EventEmitter<Admin>();
  public form: FormGroup;

  public user: Admin = {email: '', password: ''};

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public ngOnInit(): void {}

  public sign(): void {
    if (this.form.valid) {
      this.user.email = this.form.controls.email.value;
      this.user.password = this.form.controls.password.value;
      this.sendSignForm.emit(this.user);
    }
  }
}

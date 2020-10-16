import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  @Input() user = new User();
  @Output() clicked: EventEmitter<User> = new EventEmitter();

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [this.user.username],
      password: [this.user.password]
    })
  }

  public onSubmit(): void{
    this.clicked.emit(this.form.value);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.scss']
})
export class FormAddClientComponent implements OnInit {
  @Input() client = new Client();
  @Output() clicked: EventEmitter<Client> = new EventEmitter();

  public states = Object.values(StateClient);
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.client.name, Validators.compose([Validators.required, Validators.minLength(10)])],
      ca: [this.client.ca],
      tva: [this.client.tva],
      comment: [this.client.comment],
      state: [this.client.state]
    })
  }

  public onSubmit(): void{
    this.clicked.emit(this.form.value);
  }

}

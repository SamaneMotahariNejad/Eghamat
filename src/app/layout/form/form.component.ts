import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form } from '../../../app/core/models/form';
import { FormService } from 'src/app/core/services/form.service';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  submited = false;
  submitedValue = false;
  disable = false;
  formSubmit: Form = {
    ueid: '',
    mailContent: '',
    mailFrom: '',
    subject: ''
  };
  subscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private formSV: FormService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['', [Validators.required, Validators.pattern('^\\w.+@[a-zA-Z_]+?\\.[a-zA-Z]{2,4}$')]],
      messagebody: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submitForm() {
    this.submited = true;

    this.formSubmit.mailFrom = this.myForm.value.email;
    this.formSubmit.ueid = environment.UEID;
    this.formSubmit.subject = this.myForm.value.name;
    this.formSubmit.mailContent = this.myForm.value.messagebody;

    // stop here if form is invalid
    if (this.myForm.invalid) {
      return;
    } else {
      this.submitedValue = true;
      document.getElementById('disable-page').classList.add('show');
      document.getElementById('form').classList.add('disable-page');
      this.disable = true;
      this.subscription = this.formSV.submitForm(this.formSubmit).subscribe(response => {
        if (!response) {
          document.getElementById('form').classList.remove('disable-page');
          document.getElementById('disable-page').classList.remove('show');
          this.disable = false;
        } else { }
      });
    }

  }

  get f() { return this.myForm.controls; }
}

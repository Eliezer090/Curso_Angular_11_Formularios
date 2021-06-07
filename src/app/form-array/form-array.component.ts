import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  clientForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    adress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    }),
    phones: this.fb.array([]),
    childrens: this.fb.array([])
    /**this.fb.group({
      name: [''],
      age: ['']
    }) */
  });

  phones = this.clientForm.get('phones') as FormArray;
  childrens = this.clientForm.get('childrens') as FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addPhone();
  }

  submit() {
    console.log(this.clientForm.value);
  }
  addPhone() {
    this.phones.push(this.fb.control('', [Validators.required]));
  }

  addchildren() {
    this.childrens.push(this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]]
    }))
  }
}

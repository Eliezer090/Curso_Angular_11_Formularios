import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    //Cada alterção ele fica ouvindo esse campo
    this.firstName.valueChanges.subscribe((newName)=>{
      console.log(newName);
    })
  }

  setFirstName() {
    this.firstName.setValue("asd");
    console.log(this.firstName.value);
  }

}

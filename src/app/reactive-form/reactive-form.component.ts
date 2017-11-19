import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder,FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  constructor(private fb:FormBuilder) { }
form:FormGroup;
  ngOnInit() {

   // this.form = new FormGroup({
  //name: new FormControl(''),
  //username: new FormControl('')
//});


this.form=this.fb.group({
//  name:[''],
  //username:[''],

  addressess:this.fb.array([

    this.fb.group({
      name:[''],
      age:[''],
      city:[''],
      country:['']
    })
  ])
});


console.log(this.form);



  }


addAddress(){
  let address= <FormArray> this.form.get("addressess");

  address.push(this.fb.group({
    name:[''],
    age:[''],
    city:[''],
    country:['']

  }));

}

removeAddress(){

let address= <FormArray> this.form.get("addressess");
address.removeAt(1);


}
  

processForm(){
    console.log("processing..",this.form.value);
  }

}

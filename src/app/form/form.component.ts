import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// import {HttpClient}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  form = new FormGroup({
    "userName":new FormControl(),
    "id":new FormControl()
  });

  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }

  ngOnInit(){

  }

  submitForm(){
    console.log(this.form);
    this.http.post('http://54.157.199.187:8080/users', {  "name" : this.form.value.userName , "id" : this.form.value.id})
    .subscribe(
      data=>{
        console.log('data is ' + data);
      }, 
      error =>{
        console.log('Error occured');
      }
    );
  }

}

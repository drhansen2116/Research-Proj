import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  jobTask:string[];
  hello:any;

  constructor() {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'David Hansen';
    this.age = 22;
    this.email = 'drhansen@email.sc.edu';
    this.address = {
      street:'500 Main St',
      city: 'Columbia',
      state: 'SC'
    }

    this.jobTask = ['fix flaps', 'change tires', 'check engine'];

  }

  onClick(){
    console.log('HELLO');
    this.jobTask.push('New job Task');
  }

  addJobTask(job_task){
    console.log(job_task);
    this.jobTask.push(job_task);
    return false;
  }
}


interface Address{
  street:string,
    city:string,
    state:string
}
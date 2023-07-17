import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f') form: NgForm | undefined

  constructor(private submitService: SubmitService){
    //this.laptop = new Laptop();
    
  }
  
  submit(form: NgForm) :void{
    console.log(form);
    console.log('message');
    form.reset();
  }
  

  ngAfterViewInit(){
    console.log(this.form);
  }

  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];

  // onSubmit(f: NgForm): void{
  //   console.log('submit message');
  //   //const content = this.form?.value;
  //   //TODO send model to API
  //   // if(content.invalid){
  //   //   return;
  //   // }

  //   // content.submitService.submit();
    
  // }

  // export class laptop {
  //   processor: string;
  //   ram: string;
  //   hardDisk: number;
  //   op: string;
  // }
}
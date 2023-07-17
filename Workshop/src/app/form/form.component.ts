import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit {
  @ViewChild('f') form: NgForm | undefined

  constructor(private submitService: SubmitService){}

  ngAfterViewInit(){
    console.log(this.form);
  }

  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];

  onSubmit(){
    const content = this.form?.value;
    //TODO send model to API
    if(content.invalid){
      return;
    }

    content.submitService.submit();
  }
}

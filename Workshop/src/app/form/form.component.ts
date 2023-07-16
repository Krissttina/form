import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit {
  @ViewChild('f') form: NgForm | undefined

  ngAfterViewInit(){
    console.log(this.form);
  }
  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];
}

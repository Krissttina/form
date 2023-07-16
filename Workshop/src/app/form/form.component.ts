import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];
}

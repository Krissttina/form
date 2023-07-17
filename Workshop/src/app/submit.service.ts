import { Injectable } from '@angular/core';

interface Purchase{
  processor: string;
  ram: string;
  hardDisk: string;
  op: string;
}

@Injectable({
  providedIn: 'root'
})

export class SubmitService {
  purchase: Purchase | undefined;
  constructor() { }

  submit(): void {
    this.purchase = {
      processor: 'name',
      ram: "name",
      hardDisk: "name",
      op: "name",
    }
  }
}

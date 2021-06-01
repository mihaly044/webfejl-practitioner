import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-telecom',
  templateUrl: './telecom.component.html',
  styleUrls: ['./telecom.component.css']
})
export class TelecomComponent implements OnInit {

  telecomTypes: string[] = ["e-mail", "phone"]

  constructor(private fb: FormBuilder) { }

  @Input() form!: FormGroup;

  ngOnInit(): void {
  }

  get telecoms() {
    return this.form.get('telecom') as FormArray;
  }

  addTelecom() {
    const telecom = this.fb.group({
      system: '',
      value: ''
    });
    this.telecoms.push(telecom);
  }

  deleteTelecom(i: number) {
    this.telecoms.removeAt(i);
  }

  setData(data: any) {
    this.telecoms.clear();
    for(let i = 0; i < data.telecom.length; i++) {
      this.addTelecom();
    }
  }

}

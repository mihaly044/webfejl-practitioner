import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() form!: FormGroup;

  ngOnInit(): void {
  }

  get addresses() {
    return this.form.get('address') as FormArray;
  }


  addAddress() {
    const address = this.fb.group({
      text: ['']
    });
    this.addresses.push(address);
  }

  deleteAddress(i: number) {
    this.addresses.removeAt(i);
  }

  setData(data: any) {
    this.addresses.clear();
    for(let i = 0; i < data.address.length; i++) {
      this.addAddress();
    }
  }
}

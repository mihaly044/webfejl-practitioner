import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  nameUses: string[] = ["Usual", "Official", "Temp", "Nickname", "Anonymous", "Old", "Maiden"]

  constructor(private fb: FormBuilder) { }

  @Input() form!: FormGroup;

  ngOnInit(): void {
  }

  get names() {
    return this.form.get('name') as FormArray;
  }

  givenNames(i: number) {
    return this.names.at(i).get('given') as FormArray;
  }

  addGivenName(i: number) {
    this.givenNames(i).push(new FormControl());
  }

  deleteGivenName(i: number, j: number) {
    this.givenNames(i).removeAt(j);
  }

  addName() {
    const name = this.fb.group({
      use: [''],
      text: [''],
      family: [''],
      given: this.fb.array([''])
    });
    this.names.push(name);
  }

  deleteName(i: number) {
    this.names.removeAt(i);
  }

  setData(data: any) {
    this.names.clear();

    for(let i = 0; i < data.name.length; i++) {
      let name = data.name[i];
      this.addName();
      this.givenNames(i).clear();

      for(let j = 0; j < name.given.length; j++) {
        this.addGivenName(i);
      }
    }
  }

}

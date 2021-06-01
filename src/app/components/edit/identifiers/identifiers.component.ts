import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-identifiers',
  templateUrl: './identifiers.component.html',
  styleUrls: ['./identifiers.component.css']
})
export class IdentifiersComponent implements OnInit {

  idUses: string[] = ['Official', 'Secondary', 'Usual', 'Old'];
  idTypes: string[] = ['TAX', 'MCN', 'MR', 'etc'];

  constructor(private fb: FormBuilder) { }

  @Input() form!: FormGroup;

  ngOnInit(): void {
  }

  get identifiers() {
    return this.form.get('identifier') as FormArray;
  }

  addIdentifier() {
    const id = this.fb.group({
      use: '',
      type: '',
      value: '',
      active: [false]
    });
    this.identifiers.push(id);
  }

  deleteIdentifier(i: number) {
    this.identifiers.removeAt(i);
  }

  setData(data: any) {
    this.identifiers.clear();
    for(let i = 0; i < data.identifier.length; i++) {
      this.addIdentifier();
    }
  }
}

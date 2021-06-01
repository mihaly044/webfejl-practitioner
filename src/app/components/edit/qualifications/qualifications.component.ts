import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  @Input() form!: FormGroup;

  ngOnInit(): void {
  }

  get qualifications() {
    return this.form.get('qualification') as FormArray;
  }

  addQualification() {
    const qualification = this.fb.group({
      title: '',
      issuer: '',
      issuedOn: ''
    });
    this.qualifications.push(qualification);
  }

  deleteQualification(i: number) {
    this.qualifications.removeAt(i);
  }

  setData(data: any) {
    this.qualifications.clear();
    for(let i = 0; i < data.qualification.length; i++) {
      this.addQualification();
    }
  }

}

import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressesComponent } from 'src/app/components/edit/addresses/addresses.component';
import { IdentifiersComponent } from 'src/app/components/edit/identifiers/identifiers.component';
import { NamesComponent } from 'src/app/components/edit/names/names.component';
import { QualificationsComponent } from 'src/app/components/edit/qualifications/qualifications.component';
import { TelecomComponent } from 'src/app/components/edit/telecom/telecom.component';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditComponent implements OnDestroy, AfterViewInit {
  form: FormGroup;
  id: string | null = null;

  @ViewChild('identifierForm') identifierForm!: IdentifiersComponent;
  @ViewChild('nameForm') nameForm!: NamesComponent;
  @ViewChild('qualificationForm') qualificationForm!: QualificationsComponent;
  @ViewChild('telecomForm') telecomForm!: TelecomComponent;
  @ViewChild('addressForm') addressForm!: AddressesComponent;

  private params!: Subscription;
  constructor(private fb: FormBuilder, private crud: CrudService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = fb.group({
      active: [false],
      identifier: this.fb.array([
        this.fb.group({
          use: [''],
          type: [''],
          value: [''],
          active: [false]
        })
      ]),
      name: this.fb.array([
        this.fb.group({
          use: [''],
          text:[''],
          family: [''],
          given: this.fb.array([''])
        })
      ]),
      telecom: this.fb.array([
        this.fb.group({
          system: [''],
          value: [''],
        })
      ]),
      address: this.fb.array([
        this.fb.group(
          {
          text: [''],
        })
      ]),
      gender: [],
      birthDate: [],
      qualification: this.fb.array([
        this.fb.group({
          title: [''],
          issuer: [''],
          issuedOn:  [''],
        })
      ])
    });
  }

  ngAfterViewInit(): void {
    this.params = this.activatedRoute.paramMap.subscribe((pm: ParamMap) => {
      let id = pm.get('id');

      if(id) {
        this.crud.getById(id).subscribe(obj => {
          if(obj) {
            this.setupFormArrays(obj);
            this.form.patchValue(obj as Object);
            this.id = id;
          } else {
            // TODO: Bad id
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.params.unsubscribe();
  }

  setupFormArrays(thing: any) {
    this.nameForm.setData(thing);
    this.identifierForm.setData(thing);
    this.addressForm.setData(thing);
    this.qualificationForm.setData(thing);
    this.telecomForm.setData(thing);
  }

  onSubmit() {
    if(!this.form.valid) {
      return;
    }

    if(this.id) {
      this.crud.update(this.form.value, this.id).then(()=>{
        this.router.navigate(['/list']);
      });
    } else {
      this.crud.add(this.form.value).then(()=>{
        this.router.navigate(['/list']);
      });
    }
  }
}

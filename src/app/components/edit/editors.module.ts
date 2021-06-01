import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { IdentifiersComponent } from './identifiers/identifiers.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NamesComponent } from './names/names.component';
import { AddressesComponent } from './addresses/addresses.component';
import { TelecomComponent } from './telecom/telecom.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';


@NgModule({
  declarations: [
    QualificationsComponent,
    IdentifiersComponent,
    NamesComponent,
    AddressesComponent,
    TelecomComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule, ReactiveFormsModule,
    ConfirmDialogModule
  ],
  exports: [
    QualificationsComponent,
    IdentifiersComponent,
    NamesComponent,
    AddressesComponent,
    TelecomComponent
  ]
})
export class EditorsModule { }

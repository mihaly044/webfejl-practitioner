import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MatCardModule } from '@angular/material/card';
import { DisplayItemPipe } from 'src/app/pipes/display-item.pipe';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ListComponent,
    DisplayItemPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ]
})
export class ListModule { }

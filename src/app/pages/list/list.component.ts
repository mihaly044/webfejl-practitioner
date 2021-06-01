import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items$!: Observable<any[]>;

  constructor(private crudService: CrudService, private dialog: MatDialog) {
    this.items$ = crudService.getAll();
  }


  ngOnInit(): void {
  }

  onDelete(id: string): void {
    let ref = this.dialog.open(ConfirmDialogComponent);

    ref.componentInstance.confirmed.subscribe(()=>{
      this.crudService.delete(id);
    });
  }

}

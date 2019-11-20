import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.scss']
})
export class ButtonDialogComponent implements OnInit {

  @Input()
  titulo: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    console.log(this.titulo);
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '600px',
      data: {titulo: this.titulo} 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

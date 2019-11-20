import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  titulo: string;
}


@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {

  @Output() 
  callBackFunction: EventEmitter<any> = new EventEmitter();
  pesquisando: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  pesquisa() {
    this.pesquisando = true;
    console.log('1');
    setTimeout(() => {
      console.log('2');
      this.pesquisando = false;
    }, 3000);
  }
}

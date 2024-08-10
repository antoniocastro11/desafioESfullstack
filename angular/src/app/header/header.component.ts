import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JsonFormComponent } from '../json-form/json-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _dialog: MatDialog){}

  addEditForm(){
    this._dialog.open(JsonFormComponent)
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {

  links;

  constructor(
    private ds: DataService,
    public dialogRef: MatDialogRef<MenuMobileComponent>,
  ) { }

  ngOnInit() {
    this.links = this.ds.links;
  }

  cancelar() {
    this.dialogRef.close();
  }

}

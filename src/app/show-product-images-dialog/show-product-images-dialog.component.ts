import { Component,Inject, OnInit } from '@angular/core';
import { FileHandle } from '../_model/file-handle.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-product-images-dialog',
  templateUrl: './show-product-images-dialog.component.html',
  styleUrls: ['./show-product-images-dialog.component.css']
})
export class ShowProductImagesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data :any) { }

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages(){
    console.log(this.data);
  }

}
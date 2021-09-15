import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule,MatListItem,MatListOption} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatListModule, MatToolbarModule,MatInputModule,MatIconModule],
  exports: [MatListModule, MatToolbarModule,MatInputModule,MatIconModule]
})


export class MaterialModule{}

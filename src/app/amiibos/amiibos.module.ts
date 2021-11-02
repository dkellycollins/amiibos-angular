import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AmiiboItemComponent } from './components/amiibo-item/amiibo-item.component';
import { AmiibosListComponent } from './components/amiibos-list/amiibos-list.component';
import { SelectSeriesModalComponent } from './components/select-series-modal/select-series-modal.component';

@NgModule({
  declarations: [
    AmiiboItemComponent,
    AmiibosListComponent,
    SelectSeriesModalComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class AmiibosModule { }

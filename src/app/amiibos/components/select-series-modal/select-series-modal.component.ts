import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-series-modal',
  templateUrl: './select-series-modal.component.html',
  styleUrls: ['./select-series-modal.component.css']
})
export class SelectSeriesModalComponent implements OnInit {

  @Select(AmiibosSelectors.series)
  public readonly series$: Observable<Array<string>>;

  public constructor(private readonly dialogRef: MatDialogRef<SelectSeriesModalComponent>) {}

  public select(series: string | null): void {
    this.dialogRef.close(series);
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}

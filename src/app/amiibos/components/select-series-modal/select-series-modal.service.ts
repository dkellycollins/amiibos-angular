import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SelectSeriesModalComponent } from "./select-series-modal.component";

@Injectable()
export class SelectSeriesModalService {

  constructor(private readonly dialog: MatDialog) { }

  public async open(): Promise<string> {
    const dialogRef = this.dialog.open(SelectSeriesModalComponent);
    const { data } = await dialogRef.afterClosed().toPromise();
    return data;
  }
}
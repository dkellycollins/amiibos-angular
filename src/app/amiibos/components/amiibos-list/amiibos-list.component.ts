import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AmiiboModel } from '../../models/amiibos.model';

@Component({
  selector: 'app-amiibos-list',
  templateUrl: './amiibos-list.component.html',
  styleUrls: ['./amiibos-list.component.css']
})
export class AmiibosListComponent {

  @Input()
  public amiibos!: Array<AmiiboModel & { isCollected: boolean }>;

  @Output()
  public collectedChanged: EventEmitter<{ slug: string, collected: boolean }> = new EventEmitter();

  public onCollectedChanged(slug: string, collected: boolean): void {
    this.collectedChanged.next({ slug, collected });
  }

  public getAmiiboId(amiibo: AmiiboModel): string {
    return amiibo.slug;
  }

}

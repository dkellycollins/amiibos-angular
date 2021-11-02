import { Injectable } from '@angular/core';
import { NgxsFirestore } from '@ngxs-labs/firestore-plugin';
import { Observable } from 'rxjs';
import { AmiiboModel } from '../models/amiibo.model';

@Injectable()
export class AmiibosFirestore extends NgxsFirestore<AmiiboModel> {
  protected path = 'amiibos';

  public collectionByType$(type: string): Observable<Array<AmiiboModel>> {
    return this.collection$((ref: any) => ref.where('type', '==', type));
  }
}

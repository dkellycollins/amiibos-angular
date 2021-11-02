import { Injectable } from '@angular/core';
import { NgxsFirestore } from '@ngxs-labs/firestore-plugin';
import { Observable } from 'rxjs';
import { UserAmiiboModel } from '../models/user-amiibo.model';

@Injectable()
export class UserAmiibosFirestore extends NgxsFirestore<UserAmiiboModel> {
  protected path = 'user-amiibos';

  public collectionByUser$(userUid: string): Observable<Array<UserAmiiboModel>> {
    return this.collection$((ref: any) => ref.where('userUid', '==', userUid));
  }

  public docById$(amiiboSlug: string, userUid: string): Observable<UserAmiiboModel> {
    return this.doc$(`${amiiboSlug}:${userUid}`);
  }
}

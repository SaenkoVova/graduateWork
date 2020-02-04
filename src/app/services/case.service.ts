import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private afs: AngularFirestore) { }

  getCases(pageSize, startAt, endAt) {
    return this.afs.collection(`cases`, ref => ref
                                                .orderBy(`caseNumber`)
                                                .limit(pageSize)
                                                .endAt(endAt)
                                                .startAt(startAt))
                                                .snapshotChanges();
  }
}

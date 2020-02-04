import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FondsService {

  constructor(private afs: AngularFirestore) { }

  getFonds() {
    return this.afs.collection(`fonds`, ref => ref.orderBy(`fondNumber`)).snapshotChanges();
  }
}
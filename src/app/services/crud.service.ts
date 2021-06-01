import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertTimestamps } from 'convert-firebase-timestamp-3';
import { Pracititioner } from '../model/practitioner.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  collection: string = "practitioners";

  constructor(private afs: AngularFirestore) { }


  getAll(): Observable<Pracititioner[]> {
    return this.afs.collection(this.collection).valueChanges({idField: '_id'}) as Observable<Pracititioner[]>;
  }

  getById(id: string): Observable<Pracititioner> {
    return this.afs.collection(this.collection).doc(id).valueChanges({idField: '_id'}).pipe(map( (doc: any) => {
      return convertTimestamps(doc);
    })) as Observable<Pracititioner>;
  }

  update(data: Pracititioner, id: string): Promise<void> {
    return this.afs.collection(this.collection).doc(id).set(data);
  }

  add(data: Pracititioner): Promise<DocumentReference<Pracititioner>> {
    return this.afs.collection(this.collection).add(data) as Promise<DocumentReference<Pracititioner>>;
  }

  delete(id: string): Promise<void> {
    return this.afs.collection(this.collection).doc(id).delete();
  }
}

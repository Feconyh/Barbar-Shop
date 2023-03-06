import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, setDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/cadastro';
import { map } from 'rxjs/operators'
import { Agenda } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  valor: string
  
  constructor(
    private firestore: Firestore) {}


  // Create
  userSignUp(data: User){
    const document = doc (collection(this.firestore, 'Users'));
    return setDoc(document, data);    
  }

  // Read
  getContacts(): Observable<User[]> {
    const contactsCollection = collection(this.firestore, 'Users');
    return collectionData(contactsCollection, {idField: 'id'}).pipe(
      map(contacts => contacts as User[])
    );
  }

  // Create
  agendamento(data: Agenda){
    const document = doc (collection(this.firestore, 'Agenda'));
    return setDoc(document, data);    
  }

  }


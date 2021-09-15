import { Injectable } from "@angular/core";
import { openDB ,DBSchema,IDBPDatabase} from "idb";

@Injectable({
  providedIn: 'root'
})

export class IndexedDBServices{
  private db: IDBPDatabase<MyDB>
  private dbLogged: IDBPDatabase<MyDBLogged>
  constructor(){
    this.connectToDb()
  }
  async connectToDb(){
    this.db = await openDB<MyDB>('db_contacts',1,{
      upgrade(db){
        db.createObjectStore('contacts-store', { autoIncrement : true ,keyPath:"id"})
      }
    })
    this.dbLogged = await openDB<MyDBLogged>('db_logged',1,{
      upgrade(db){
        db.createObjectStore('logged',{ autoIncrement : true })
      }
    })
  }
  saveContact(contact: Contact, key?: number){
    console.log("key " + key)
    console.log(contact)
    contact.id = key
    if(contact.nome.trim() != "" && contact.email.trim() != "" && contact.telefone.trim() != ""){
      return this.db.put('contacts-store',contact)
    }

  }
  removeContact(key:any){
    console.log(key)
    return this.db.delete('contacts-store',IDBKeyRange.only(key))
  }
  getAllContacts(){
    if(this.db == undefined){
      return new Promise(function(resolve, reject) {
        resolve('false')
      });
    }else{
      return this.db.getAll('contacts-store')
    }
  }
  setLogged(logged: string){
    return this.dbLogged.put('logged',logged,'0')
  }
  getLogged(){
    if(this.dbLogged == undefined){
      return new Promise(function(resolve, reject) {
        resolve('false')
      });
    }else{
      return this.dbLogged?.getAll('logged','0')
    }
  }
}


interface MyDB extends DBSchema{
  'contacts-store':{
    key:string,
    value:Contact
  }
}

interface MyDBLogged extends DBSchema{
  'logged':{
    key:string,
    value:string
  }
}

interface Contact{
  nome:string,
  telefone:string,
  email:string,
  id:number
}


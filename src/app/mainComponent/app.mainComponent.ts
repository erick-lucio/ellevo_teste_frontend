import { Component ,Injectable} from '@angular/core';
import {IndexedDBServices} from '../services/index-db-service';
import { Router, NavigationEnd } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-root',
  templateUrl: './app.mainComponent.html',
  styleUrls: ['./app.mainComponent.css']
})
export class MainComponent {
  title = 'contatos-front';
  contacts
  contactOrder
  order: string = 'nome';

  deleteContact(key:string){
    this.indexedDBServices.removeContact(key)
    .then((resp)=>{
      this.updateContact()
    })
    .catch((resp)=>{
      this.updateContact()
    })

  }

  updateContact(){
    this.indexedDBServices.getAllContacts()
    .then((resp:[])=>{
      this.contacts = []
      try {
        resp.forEach((item)=>{
          this.contacts.push(item);
        })
      } catch (error) {

      }

    })
  }

  constructor(
    private indexedDBServices: IndexedDBServices,
    private router: Router,
    private orderPipe: OrderPipe
  ) {
    this.updateContact()

  }


}

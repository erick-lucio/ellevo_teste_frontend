import { Component } from '@angular/core';
import {IndexedDBServices} from '../services/index-db-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.headerComponent.html',
  styleUrls: ['./app.headerComponent.css']
})
export class HeaderComponent {
  title = 'contatos-front';
  constructor(
    private indexedDBServices: IndexedDBServices,
  ) {}


}

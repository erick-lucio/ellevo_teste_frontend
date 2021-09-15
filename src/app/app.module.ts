import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injectable} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from 'ngx-order-pipe';
import { AppRouting, routingComponents } from './app-routing.module';
import {MaterialModule} from './material.module'
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './headerComponent/app.headerComponent';
import {IndexedDBServices} from './services/index-db-service';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  declarations: [
    HeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HeaderComponent],

})
export class AppModule {
  constructor(
    private indexedDBServices: IndexedDBServices,
    private router: Router,){
    router.events.subscribe((ev) => {
        // see also
        if(ev instanceof NavigationEnd) {
          this.indexedDBServices.getLogged()
            .then((resp)=>{
              if(resp != 'true'){
                this.router.navigate(['/login']);
              }
            })
        }
    });
  }


 }

import { NgModule , OnInit, OnDestroy} from '@angular/core';
import { RouterModule, Routes ,NavigationEnd , NavigationStart, NavigationError} from '@angular/router';
import { MainComponent } from './mainComponent/app.mainComponent';
import { EditComponent } from './editComponent/app.editComponent';
import { InsertComponent } from './insertComponent/app.insertComponent';
import { VisualizeComponent } from './visualizeComponent/app.visualizeComponent';
import { LoginComponent } from './loginComponent/app.loginComponent';
import {IndexedDBServices} from './services/index-db-service';
import { Router, ActivatedRoute, ParamMap , RouterEvent,Event} from '@angular/router';


var routes: Routes = [
  { path: '', component: MainComponent,  },
  { path: 'edit/:id', component: EditComponent ,  },
  { path: 'insert', component: InsertComponent , },
  { path: 'contact/:id', component: VisualizeComponent , },
  { path: 'login',  component: LoginComponent , }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRouting {
  myObserver = null;
  constructor(
    private indexedDBServices: IndexedDBServices,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

 }
export const routingComponents = [EditComponent,MainComponent,InsertComponent,VisualizeComponent,LoginComponent]

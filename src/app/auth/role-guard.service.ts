import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {IndexedDBServices} from '../services/index-db-service'

@Injectable({ providedIn: 'root' })

export class RoleGuardService implements CanActivate {
  constructor(
    public router: Router,
    private indexedDBServices: IndexedDBServices)
     {}
  canActivate(): boolean {
    // this.indexedDBServices.getLogged()
    // .then((resp)=>{
    //   console.log("route1 " + resp)
    // })
    // this.indexedDBServices.getLogged()
    // .then((resp)=>{
    //   if(resp != "true"){
    //     this.router.navigate(['/login']);
    //     return false;
    //   }else{
    //     this.router.navigate(['/login']);
    //     return true;
    //   }
    // })

    return true
  }}


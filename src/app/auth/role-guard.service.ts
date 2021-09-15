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

    return true
  }}


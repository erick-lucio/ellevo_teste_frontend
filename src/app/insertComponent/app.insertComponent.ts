import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {IndexedDBServices} from '../services/index-db-service';

@Component({
  selector: 'app-insert',
  templateUrl: './app.insertComponent.html',
  styleUrls: ['./app.insertComponent.css']
})
export class InsertComponent {

  checkoutFormInsert = this.formBuilder.group({
    nome: '',
    telefone: '',
    email:''
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutFormInsert.value);
    this.indexedDBServices.saveContact(this.checkoutFormInsert.value)
    .then((resp)=>{
      console.log(resp)
      this.checkoutFormInsert.reset();
      this.router.navigate(['/']);
    })
    .catch((resp)=>{
      console.log(resp)
      this.checkoutFormInsert.reset();
    })
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private indexedDBServices: IndexedDBServices
  ) {}
}

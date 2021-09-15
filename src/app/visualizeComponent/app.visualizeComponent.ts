import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {IndexedDBServices} from '../services/index-db-service'

interface Contact{
  nome:string,
  email:string,
  telefone:string,
  id?:string
}

@Component({
  selector: 'app-edit',
  templateUrl: './app.visualizeComponent.html',
  styleUrls: ['./app.visualizeComponent.css']
})
export class VisualizeComponent {
  nome
  telefone
  email
  contactId
  checkoutForm = this.formBuilder.group({
    nome: '',
    telefone: '',
    email:''
  });
  param1: number;
  param2: number;
  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private indexedDBServices: IndexedDBServices
  ) {
  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const contactId = Number(routeParams.get('id'));
    this.contactId = contactId
    this.indexedDBServices.getAllContacts()
      .then((resp:[Contact])=>{
        resp.forEach(element => {
          let obj : Contact = element
          if(obj.id.toString() == contactId.toString()){
            this.nome = obj.nome
            this.telefone = obj.telefone
            this.email = obj.email
          }
        });

      })
      .catch((resp)=>{
        console.log(resp)
      })
  }
}

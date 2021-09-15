import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {IndexedDBServices} from '../services/index-db-service'

interface Contact{
  nome:string,
  email:string,
  telefone:string,
  id?:string
}

@Component({
  selector: 'app-edit',
  templateUrl: './app.editComponent.html',
  styleUrls: ['./app.editComponent.css']
})
export class EditComponent {
  nome
  telefone
  email
  contactId
  checkoutFormEdit = this.formBuilder.group({
    nome: '',
    telefone: '',
    email:''
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutFormEdit.value);
    const routeParams = this.route.snapshot.paramMap;
    const contactId = Number(routeParams.get('id'));
    this.contactId = contactId
    this.indexedDBServices.saveContact(this.checkoutFormEdit.value,this.contactId)
    .then((resp)=>{
    })
    .then((resp)=>{
    })
    this.checkoutFormEdit.reset();
    this.router.navigate(['/']);
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private indexedDBServices: IndexedDBServices
  ) {}

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
    })
  }
}


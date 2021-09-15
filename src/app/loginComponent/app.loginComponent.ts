import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {IndexedDBServices} from '../services/index-db-service'

@Component({
  selector: 'app-edit',
  templateUrl: './app.loginComponent.html',
  styleUrls: ['./app.loginComponent.css']
})
export class LoginComponent {
  logged = false;
  url = 'https://localhost:44359/auth/login';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  checkoutFormLogin = this.formBuilder.group({
    login: '',
    senha: ''
  });

  onSubmit(): void {
    console.log('Your order has been submitted', this.checkoutFormLogin.value);
    let body = JSON.stringify(this.checkoutFormLogin.value)
    //
    //this.router.navigate(['/']);
    console.log(body)
    var sucess = this.http.post(this.url,body,{
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json'
      },
      responseType:"text"
    }).subscribe(res=>{
      if(res == "sucess"){
        this.logged = true
        this.indexedDBServices.setLogged('true')
        .then(()=>{

          this.router.navigate(['/']);
        })
      }else{
        this.logged = false
      }
      //console.log(res)
    })

    this.checkoutFormLogin.reset();

  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private indexedDBServices:IndexedDBServices
  ) {}


}

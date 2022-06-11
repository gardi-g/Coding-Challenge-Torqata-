import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@ts-ignore
  signUpForm: FormGroup;
  //@ts-ignore
  signInForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email:'',
      password:''
    });
    this.signUpForm = this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    })
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // @ts-ignore
    signUpButton.addEventListener('click', () => {
      // @ts-ignore
      container.classList.add("right-panel-active");
    });

    // @ts-ignore
    signInButton.addEventListener('click', () => {
      // @ts-ignore
      container.classList.remove("right-panel-active");
    });
  }
submit():void {
  this.http.post('http://localhost:8000/api/login', this.signUpForm.getRawValue(), {withCredentials: true
})
  .subscribe(()=>{
    this.router.navigate(['/dashboard'])
  });
}
}

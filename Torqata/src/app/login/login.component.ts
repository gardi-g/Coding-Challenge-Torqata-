import { HttpClient } from '@angular/common/http';
import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
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
  invalidLogin: boolean | undefined;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router) { }
  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
    
    this.signUpForm = this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
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

    // ---------- TRIED IMPLEMENTING FIREBASE AUTH ----------------
    // if(localStorage.getItem('users')!==null)
    // this.isSignedIn = true
    // else
    // this.isSignedIn = false
    // -------------------------------------------------------------
  }
submitSignUp():void {
  this.http.post('https://coding-challenge-torqata-default-rtdb.firebaseio.com/users.json', this.signUpForm.value)
  .subscribe((response)=>{
    this.router.navigate(['/'])
    console.log(response);
  });
}
submitSignIn():void {
  this.http.get('https://coding-challenge-torqata-default-rtdb.firebaseio.com/users.json', this.signInForm.value)
  .subscribe((response)=>{
    this.router.navigate(['/home'])
    console.log(response);
  });
}
// -------TRIED IMPLEMENTING FIREBASE AUTH --------------- 
// async onSignUp(email:string,password:string){
//   await this.firebaseService.signup(email,password)
//   if(this.firebaseService.isLoggedIn)
//   this.isSignedIn = true
// }
// async onSignin(email:string,password:string) {
//   await this.firebaseService.signup(email,password)
//   if(this.firebaseService.isLoggedIn)
//   this.isSignedIn = true
// }
// --------------------------------------------------------
}

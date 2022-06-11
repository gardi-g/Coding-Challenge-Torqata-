import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    })
  }
  submit(): void {
      this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
      .subscribe(()=>{
        this.router.navigate([''])
      })
  }

}

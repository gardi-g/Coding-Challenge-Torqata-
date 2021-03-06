import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { LoginComponent } from './login/login.component';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import{MatSelectModule} from '@angular/material/select';
import { NavComponent } from './nav/nav.component';
import{AngularFireModule} from '@angular/fire/compat'
import{AngularFireAuthModule} from'@angular/fire/compat/auth';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    LoginComponent,
    NavComponent,
    HomepageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    AngularFireAuthModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDoZOPyAqCVlYoRazUEjnHnbS_pYuZxmnU",
      authDomain: "coding-challenge-torqata.firebaseapp.com",
      projectId: "coding-challenge-torqata",
      storageBucket: "coding-challenge-torqata.appspot.com",
      messagingSenderId: "729883788385",
      appId: "1:729883788385:web:aa0968814f5e9c8d215620",
      measurementId: "G-Y7WR3KGLLV"
    }),
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

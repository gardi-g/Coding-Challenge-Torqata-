import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  @Output() isLogout = new EventEmitter<void>()
  isSignedIn = false;
  constructor(public firebaseService:FirebaseService) {}
  
  // logout(){
  //   this.firebaseService.logout()
  //   this.isLogout.emit()
  // }
  // handleLogOut(){
  //   this.isSignedIn = false
  // }
}

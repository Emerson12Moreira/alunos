import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null>;
  user: User

  constructor(private auth: Auth, private router: Router) { 
    this.user$ = user(this.auth);
    this.user$.subscribe(u => {
      this.user = u as User
    })
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then(()=>{
      this.router.navigate(['/home'])
    })
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth).then(()=>{
      
      this.router.navigate(['/login'])
    })
  }
}

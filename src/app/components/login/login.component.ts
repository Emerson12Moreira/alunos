import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sendEmailVerification } from 'firebase/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email = ''
    pass = ''
  constructor(public auth: AuthService, private router: Router) { 
    this.auth.user$.subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
    
  }

  login(){
    this.auth.login(this.email, this.pass)
  }

  register(){
    this.auth.register(this.email, this.pass).then((res) => {
      sendEmailVerification(res.user).then(r => {
        console.log("sended verification", r);
      })
    })
  }

  sair(){
    this.auth.logout()
  }

}

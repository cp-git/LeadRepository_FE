import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Userdetails } from 'src/app/userdetails/class/userdetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  userDetails!: Userdetails;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {

    if (this.username === 'admin' && this.password === 'pass') {
      this.router.navigate(['/leaddetails']);
    } else {
      alert('Invalid username or password');
    }
  }

  loginUser() {
    this.loginService.findUserIsValid(this.username, this.password).subscribe(
      (response) => {
        this.userDetails = response;
        sessionStorage.setItem("userId", this.userDetails.id.toString())
        // alert(JSON.stringify(this.userDetails))
        this.router.navigate(['/leaddetails']);
      }, (error) => {
        alert("failed to login")
      }
    )
  }
}

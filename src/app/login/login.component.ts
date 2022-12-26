import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sessionId: any;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder) {

    this.sessionId = "";
    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.loginService.login(username, password).subscribe(response => {
      if (response.id) {
        sessionStorage.setItem(
          'sessionId',
          response.id
        );
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.");
      }
    });
  }
}

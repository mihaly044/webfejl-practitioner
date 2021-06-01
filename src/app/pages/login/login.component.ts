import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  hide: boolean;
  loginForm: FormGroup;
  sub: Subscription;

  constructor(private auth: AuthService, private router: Router, private snackbar: MatSnackBar) {
    this.hide = true;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.sub = this.auth.currentUser.subscribe((state)=> {
      if(state) {
        this.router.navigate(["/list"]);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if(!this.loginForm.valid) {
      return;
    }

    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    if(email && password) {
      this.auth.login(email, password).then(
        () => {
          console.log("auth ok");
          this.router.navigate(["/list"]);
        },
        () => {
          console.log("auth bad");
          this.snackbar.open("Invalid e-mail or password", "Dismiss");
        }
      )
    }

  }


}

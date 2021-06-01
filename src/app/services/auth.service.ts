import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(email: string, password: string): Promise<any> {
      return this.afa.signInWithEmailAndPassword(email, password);
  }

  async logout(): Promise<void> {
    await this.afa.signOut();
  }

  get currentUser() {
    return this.afa.authState;
  }

  public isLoggedIn(): boolean {
    return !!this.afa.currentUser;
  }

}

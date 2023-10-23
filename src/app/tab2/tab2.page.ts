import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name: string = "";
  email: string = "";
  senha: string = "";

  constructor(public navCntrl: NavController, private auth:Auth) {}

  async login() {
    const user = await signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.senha
    );
    console.log(user);
    this.goinicio();
    return user;
    
  }

  goinicio() {
    this.navCntrl.navigateForward('/tabs/tab1');
  }
}


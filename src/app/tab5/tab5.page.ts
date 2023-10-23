import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  nome: string = "";
  email: string = "";
  senha: string = "";

  constructor(public navCntrl: NavController, private auth: Auth) { }

  ngOnInit() {
  }

  async cad() {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.senha
    );
    return user;
  }

  gotoLogin() {
    this.navCntrl.navigateBack('/tabs/tab2');
  }
}

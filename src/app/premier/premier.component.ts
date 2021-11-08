import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss']
})
export class PremierComponent implements OnInit {

  messageBienvenue: string;
  disabledButton = true;

  constructor() {
    this.messageBienvenue = 'Bonjour les amis'
  }

  ngOnInit(): void {

  }

   // Affiche le message que je clique sur le bouton lié
  showMessage(msg: string): void {
    console.log(msg);
  }

  // Affiche l'évènement lié au click du bouton
  showMouseEvent($event: MouseEvent) {
    console.log($event);
  }

  // (Dés)Active l'input quand on clique sur le bouton lié
  activeInput(): void {
    this.disabledButton = !this.disabledButton;
  }
}

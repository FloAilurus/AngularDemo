import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../models/utilisateur";

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  valueProperty = 'blue';
  monId = 'titreNgClass';

  obj: {
    name: string;
    age: number
  } | undefined;

  utilisateurs: Utilisateur[] = [
    {
      name: 'Greg',
      age: 41,
      action: (param) => {
        console.log(param);
      }
    },
    {
      name: 'Maxime',
      age: 14,
      action: (param) => {
        console.log(param);
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string {

    const random = Math.floor(Math.random() * 4);
    switch (random) {
      case 0: {
        this.valueProperty = 'blue';
        return 'blue';
      }
      case 1: {
        this.valueProperty = 'red';
        return 'red';
      }
      case 2: {
        this.valueProperty = 'yellow';
        return 'yellow';
      }
      case 3:{
        this.valueProperty = 'green';
        return 'green';
      }
    }

    return 'black';

  }

  showParagraphe(): boolean {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) this.obj = {
      name: 'Greg',
      age: 41
    }
    return random === 0;
  }
}

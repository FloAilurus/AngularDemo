import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deuxieme',
  templateUrl: './deuxieme.component.html',
  styleUrls: ['./deuxieme.component.scss']
})
export class DeuxiemeComponent implements OnInit {

  message = 'Message formaté avec un filtre';

  maDate = Date.now();

  montant = 125.9578;

  obj = {
    name: 'Greg',
    age: 41
  }

  tab = [1,2,3,4,5,6,7,8,9];

  tempCelsius = 30;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  article1name = "Ocre";

  products: Product[] = [
    {
      id: 1,
      name: "Ocre",
      description: "donne +1 PA",
      price: 50_000_000,
      quantity: 2,
      picturePath: "assets/img/dofus_ocre.png"
    },
    {
      id: 2,
      name: "Vulbis",
      description: "donne +1 PM",
      price: 40_000_000,
      quantity: 7,
      picturePath: "assets/img/dofus_vulbis.jpg"
    },
    {
      id: 3,
      name: "Turquoise",
      description: "donne +10% de coups critiques",
      price: 10_000_000,
      quantity: 4,
      picturePath: "assets/img/dofus_turquoise.jpg"
    }
  ]

  reduceQuantity(id: number): void{
    this.products[id -1].quantity--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

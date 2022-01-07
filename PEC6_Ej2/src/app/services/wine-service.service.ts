import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Wine } from "../models/wine";

@Injectable({
  providedIn: "root",
})
export class WineServiceService {
  private wines: Wine[];
  private wine: Wine;
  public wineForm: FormGroup;
  imgUrlPattern =
    "(https?://)?(www.)?([a-zA-Z0-9]{1,})\\.([a-zA-Z]{2,3})[/\\w .-]*/?";
  constructor(private formBuilder: FormBuilder) {
    this.wines = [
      {
        id: 1,
        name: "Domaine de la Butte La Pied de la Butte",
        imageUrl: "assets/images/wine1.jpg",
        price: 19.95,
        foodPairing: [
          {
            name: "Embutidos",
            glutten: false,
            kcal: 600,
            vegan: false,
          },
          {
            name: "Patés",
            glutten: false,
            kcal: 200,
            vegan: false,
          },
        ],
        isOnSale: false,
        quantityInCart: 0,
      },
      {
        id: 2,
        name: "Lolo",
        imageUrl: "assets/images/wine2.jpg",
        price: 6.15,
        foodPairing: [
          {
            name: "Arroces caldosos",
            glutten: true,
            kcal: 455,
            vegan: true,
          },
          {
            name: "Arroces de pescado",
            glutten: true,
            kcal: 564,
            vegan: false,
          },
        ],
        isOnSale: true,
        quantityInCart: 0,
      },
      {
        id: 3,
        name: "Pago de Carraovejas",
        imageUrl: "assets/images/wine3.jpg",
        price: 31.9,
        foodPairing: [
          {
            name: "Carnes rojas asadas",
            glutten: false,
            kcal: 532,
            vegan: false,
          },
          {
            name: "Quesos curados",
            glutten: false,
            kcal: 330,
            vegan: true,
          },
        ],
        isOnSale: false,
        quantityInCart: 0,
      },
    ];
  }

  getWines(): Wine[] {
    return this.wines;
  }

  changeQuantity(wineID: number, changeInQuantity: number): Wine {
    this.wine = this.wines.find(({ id }) => wineID === id);
    this.wine.quantityInCart += changeInQuantity;
    return this.wine;
  }

  create(wine: Wine): any {}
}

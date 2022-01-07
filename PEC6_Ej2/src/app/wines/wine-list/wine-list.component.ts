import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Wine } from "src/app/models/wine";
import { WineQuantityChange } from "src/app/models/wine-quantity-change";
import { WineServiceService } from "src/app/services/wine-service.service";

@Component({
  selector: "app-wine-list",
  template: `
    <app-wine-item
      [wine]="wine"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let wine of wines"
    ></app-wine-item>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineListComponent implements OnInit {
  public wines: Wine[];
  public wine: Wine;
  constructor(public wineService: WineServiceService) {}

  ngOnInit() {
    this.wines = this.wineService.getWines();
  }

  onQuantityChange(change: WineQuantityChange) {
    this.wine = this.wineService.changeQuantity(
      change.wine.id,
      change.changeInQuantity
    );
  }
}

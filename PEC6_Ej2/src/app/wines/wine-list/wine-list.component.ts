import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Wine } from "src/app/models/wine";
import { WineQuantityChange } from "src/app/models/wine-quantity-change";
import { WineServiceService } from "src/app/services/wine-service.service";

@Component({
  selector: "app-wine-list",
  template: `
    <div *ngIf="wines$ | async as wines">
      <ul *ngIf="wines.length > 0">
        <app-wine-item
          [wine]="wine"
          (quantityChange)="onQuantityChange($event)"
          *ngFor="let wine of wines"
        ></app-wine-item>
      </ul>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineListComponent implements OnInit {
  public wines$: Observable<Wine[]>;
  public wine$: Observable<Wine>;
  constructor(public wineService: WineServiceService) {}

  ngOnInit() {
    this.wines$ = this.wineService.getWines();
  }

  onQuantityChange(change: WineQuantityChange) {
    this.wine$ = this.wineService.changeQuantity(
      change.wine.id,
      change.changeInQuantity
    );
  }
}

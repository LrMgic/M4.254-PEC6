import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/switchMap";
import { Wine } from "src/app/models/wine";
import { WineQuantityChange } from "src/app/models/wine-quantity-change";
import { WineService } from "src/app/services/wine-service.service";

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
  public searchTerm: string = "";
  private searchSubject: Subject<string> = new Subject();
  private reloadProductsList: Subject<void> = new Subject();

  constructor(public wineService: WineService) {}

  ngOnInit() {
    this.wines$ = this.searchSubject
      .startWith(this.searchTerm)
      .debounceTime(300)
      .distinctUntilChanged()
      .merge(this.reloadProductsList)
      .switchMap((query) => this.wineService.getWines(this.searchTerm));
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onQuantityChange(change: WineQuantityChange) {
    this.wineService.changeQuantity(change.wine.id, change.changeInQuantity)
        .subscribe((res) => this.reloadProductsList
        .next());
  }

  create() {
    this.reloadProductsList.next();
  }
}

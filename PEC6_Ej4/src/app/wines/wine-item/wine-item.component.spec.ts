import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { wineItemComponent } from "./wine-item.component";

describe("wineItemComponent", () => {
  let component: wineItemComponent;
  let fixture: ComponentFixture<wineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [wineItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(wineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

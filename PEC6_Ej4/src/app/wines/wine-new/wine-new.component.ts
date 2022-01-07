import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Wine } from "src/app/models/wine";
import { WineService } from "src/app/services/wine-service.service";

@Component({
  selector: "app-wine-new",
  templateUrl: "./wine-new.component.html",
  styleUrls: ["./wine-new.component.css"],
})
export class WineNewComponent {
  @Output() private productCreated: EventEmitter<void> = new EventEmitter();
  public message = "";

  public wineForm: FormGroup;
  private wine$: Observable<Wine>;
  submitted = false;
  imgUrlPattern =
    "(https?://)?(www.)?([a-zA-Z0-9]{1,})\\.([a-zA-Z]{2,3})[/\\w .-]*/?";
  constructor(
    public wineService: WineService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          // UserValidator.NameWineValidator
        ],
      ],
      imageUrl: [
        null,
        [Validators.required, Validators.pattern(this.imgUrlPattern)],
      ],
      price: [null, [Validators.required, Validators.min(1)]],
      isOnSale: [false],
    });
  }

  onSubmit(productForm) {
    this.submitted = true;
    if (this.wineForm.valid) {
      console.log("Wine Form Value: ", this.wineForm.value);
      const wine: Wine = productForm.value.product;
      this.wineService.create(wine).subscribe(
        (res) => {
          this.message = "Product successfully created.";
          console.log("Triggered event emitter");
          this.productCreated.next();
        },
        (err) => {
          this.message = "Unable to create product, please try again.";
        }
      );
    } else {
      console.error("Error Wine Form");
      this.message = "Please correct all errors and resubmit the form";
    }
  }

  get name() {
    return this.wineForm.get("name");
  }

  get imageUrl() {
    return this.wineForm.get("imageUrl");
  }

  get price() {
    return this.wineForm.get("price");
  }

  get isOnSale() {
    return this.wineForm.get("isOnSale");
  }
}

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WineServiceService } from "src/app/services/wine-service.service";

@Component({
  selector: "app-wine-new",
  templateUrl: "./wine-new.component.html",
  styleUrls: ["./wine-new.component.css"],
})
export class WineNewComponent {
  public wineForm: FormGroup;
  submitted = false;
  imgUrlPattern =
    "(https?://)?(www.)?([a-zA-Z0-9]{1,})\\.([a-zA-Z]{2,3})[/\\w .-]*/?";

  constructor(private formBuilder: FormBuilder) {
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

  onSubmit() {
    this.submitted = true;
    if (this.wineForm.valid) {
      console.log("Wine Form Value: ", this.wineForm.value);
    } else {
      console.error("Error Wine Form");
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

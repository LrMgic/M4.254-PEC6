import { AbstractControl, ValidationErrors } from "@angular/forms";

const nameWine = ["Laya", "K-Naina", "Verdejo", "Monastrell"];
export class UserValidator {

  static NameWineValidator(c:AbstractControl) {
    if (c.value == null) return null;
    for (let i of nameWine) {
      if(c.value == i) {
        return null
      }
    }
    return { NameWineValidator: true}
  }
}

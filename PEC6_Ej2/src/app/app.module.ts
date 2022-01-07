import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { WineServiceService } from "./services/wine-service.service";
import { WineItemComponent } from "./wines/wine-item/wine-item.component";
import { WineListComponent } from "./wines/wine-list/wine-list.component";
import { WineNewComponent } from "./wines/wine-new/wine-new.component";

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [WineServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

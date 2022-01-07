import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { WineService } from "./services/wine-service.service";
import { WineItemComponent } from "./wines/wine-item/wine-item.component";
import { WineListComponent } from "./wines/wine-list/wine-list.component";
import { WineNewComponent } from "./wines/wine-new/wine-new.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [WineService],
  bootstrap: [AppComponent],
})
export class AppModule {}

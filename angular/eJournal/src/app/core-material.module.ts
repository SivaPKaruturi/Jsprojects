import { NgModule, ModuleWithProviders } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
const coreMaterialsMods = [
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatSelectModule,
  MatDatepickerModule,
];

@NgModule({
  imports: [coreMaterialsMods],
  exports: [coreMaterialsMods],
})
export class CoreMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreMaterialModule,
    };
  }
}

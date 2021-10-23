import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import * as views from "./views";
const routes: Routes = [
  { path: "home", component: views.HomeComponent },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "dashboard", component: views.UserDashboardComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

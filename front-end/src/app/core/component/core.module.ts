import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "src/app/nav-bar/nav-bar.component";
import { Error404Component } from "./error-404/error-404.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}
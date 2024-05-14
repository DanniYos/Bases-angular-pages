import { NgModule } from "@angular/core";
import { CouterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [
    CouterComponent
  ],
  exports: [
    CouterComponent
  ]
})


export class CounterModule{}

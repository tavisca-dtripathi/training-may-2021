import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { DropDownComponent } from './directives/componentsirective/app.dropdown.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { ColorDirective } from './directives/attributedirective/app.color.directive';
import { AlertDirective } from './directives/attributedirective/app.alert.directive';
import './lit-element/app.litelement';
import { LitElementComponent } from './lit-element/litelement.component';
import { MyInputComponentComponent } from './my-input-component/my-input-component.component';

// The AppModule class is decoared with @NgModule, to set the behavior of AppMOdule as 'Angular-MOdule'
// aka 'the container for all Angular Standard object'

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DropDownComponent,
     ProductFormComponent, ColorDirective,AlertDirective,LitElementComponent, MyInputComponentComponent
  ],
   
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

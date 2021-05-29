// class must be expotable and the validaiton method must be static
// the validator logic method must return 'any', because if the data is valid then null will be returned
// else for invalid data the JSON object will be returned with invalidation key/value

import { AbstractControl } from "@angular/forms";
import { Product } from "../../models/app.product.model";
import { ProductLogic } from "../../models/app.product.logic";
// e.g. {valueInvlaid:true}  
export class CustomValidator {
    static checkEven(ctrl: AbstractControl): any {
        let value = parseInt(ctrl.value);
        if (value % 2 === 0) {
            return null;  // valid
        } else {
            return {
                even: false
            };
        }
    }

    static checkUniqueProductId(ctrl: AbstractControl): any {
        const products = new ProductLogic().getProducts();
        if(products.length > 0){
            if (products.some(x=>x.ProductId === ctrl.value)) {
                return {
                    even: true
                };
            } else {
                return null;
            }
        }
    }
}
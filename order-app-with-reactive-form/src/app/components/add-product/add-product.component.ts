import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent  implements OnInit{


  constructor(private readonly productsService: ProductsService){}

  form: FormGroup

  @Input()
  addToProduct: () => void

  ngOnInit(): void {
    this.initForm()
  }

  initForm = () => {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.max(100)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      category: new FormControl('', Validators.required),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
    })
  }

  handleSubmit =() => {
    console.log(this.form)

    this.productsService.addProductInDb(this.form.value)

    this.addToProduct()

    this.form.reset()
  }

}

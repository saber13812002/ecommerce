import { RestService } from './../../services/rest.service';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cartItems = 0;
  slideOpts = {
    autoplay: {
      delay: 2000,
    },
    zoom: false,
    effect: 'flip'
  };
  sliderConfig = {
    zoom: false,
    slidesPerView: 1.8,
    spaceBetween: 10,
    centeredSlides: false
  };

  products;
  img = []
  constructor(
    public cart: CartService,
    public loadingCtrl: LoadingController,
    private restService: RestService
  ) {
    this.cart.getCartTotal().subscribe(val => {
      this.cartItems = val;
    });


    let loader = loadingCtrl.create({ message: "..." });

    this.restService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
      this.products.forEach(element => {
        element.content.rendered = element.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");
        // this.restService.getWordpress(element.featured_media).subscribe(data => {
        //   console.log(data);
        //   this.img.push(data);
        // });
        //element.img = this.img["guid"]["rendered"] ? this.img["guid"]["rendered"] : "https://via.placeholder.com/300x300";

        return element
      });
    });


  }

  addCart() {
    const itemCount = this.cartItems + 1;
    this.cart.setCartTotal(itemCount);

  }
}

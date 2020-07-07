import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'owl-carousel-o-tutorial';

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      // when screen size is 0 pixels
      0: {
        items: 1
      },
      // when screen size is 400 pixels
      400: {
        items: 2
      },
      // when screen size is 740 pixels
      740: {
        items: 3
      },
      // when screen size is 940 pixels
      940: {
        items: 4
      }
    },
    nav: true
  };
}

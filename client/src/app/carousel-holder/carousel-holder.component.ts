import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {

  items = [
    {
      title: 'ЧЕРГОВЕ ПОПОВНЕННЯ БАЗИ ДАНИХ «ОЦИФРОВАНІ ОПИСИ СПРАВ МІСЬКОГО АРХІВУ ПЕРІОДУ ПІСЛЯ 1917 РОКУ»',
      text: 'Для надання доступу до довідкового апарату архіву у віддаленому режимі на сайті міського архіву' +
      'додатково опубліковано цифрові копії описів справ 131 фонду установ і організацій 1920-1930-х років та періоду нацистської' +
      'окупації України. До уваги користувачів – описи архівних справ Управління Південно-Західної залізниці, сільськогосподарських' + 
      'об’єднань 1920-1930 рр., а також органів місцевої влади на Хмельниччині 1941-1943 рр. Серед останніх – гебітскомісаріати міст' +
      ', управи.'
    },
    {
      title: 'ОСОБОВІ СПРАВИ ЕМІГРАНТІВ 20-30-Х РОКІВ МИНУЛОГО СТОЛІТТЯ ОНЛАЙН НА САЙТІ МІСЬКОГО АРХІВУ',
      text: 'До розділу «Е-Архів» на веб-сайті міського архіву внесені цифрові копії 1476 архівних справ фонду № Р-3066'
    }
  ];

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navSpeed: 500,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      1080: {
        items: 1
      }
    },
    nav: false
  };

  ngOnInit(): void {
  }

}

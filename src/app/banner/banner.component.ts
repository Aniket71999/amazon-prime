import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  slides = [
    { img: '../../assets/jpeg/bannerimage1.jpeg' },
    { img: '../../assets/jpeg/bannerimage2.jpeg' },
    { img: '../../assets/jpeg/bannerimage3.jpeg' },
    { img: '../../assets/jpeg/bannerimage4.jpeg' },
    { img: '../../assets/jpeg/bannerimage1.jpeg' },
    { img: '../../assets/jpeg/bannerimage2.jpeg' },
    { img: '../../assets/jpeg/bannerimage3.jpeg' },
    { img: '../../assets/jpeg/bannerimage4.jpeg' },
  ];

  slideConfig = {
    slidesToShow: 1,
    dots: true,
    // infinite: true,
    speed: 500,
    autoplay: true,
    draggable: true,
    method: {},
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}

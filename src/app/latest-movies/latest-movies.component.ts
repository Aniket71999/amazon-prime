import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss'],
})
export class LatestMoviesComponent implements OnInit {
  // slides = [
  //   { img: '../../assets/jpeg/top-reel_image1.jpg' },
  //   { img: '../../assets/jpeg/top-reel_image2.jpg' },
  //   { img: '../../assets/jpeg/top-reel_image3.jpg' },
  //   { img: '../../assets/jpeg/top-reel_image4.jpg' },
  //   { img: '../../assets/jpeg/top-reel_image1.jpg' },
  //   { img: '../../assets/jpeg/top-reel_image2.jpg' },
  //   { img: '../../assets/jpeg/top-reel_image3.jpg' },
  //   { img: '../../assets/jpeg/top-reel_image4.jpg' },
  // ];

  // slideConfig = {
  //   slidesToShow: 5,
  //   infinite: true,
  //   speed: 500,
  //   draggable: true,
  //   method: {},
  //   // rtl: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // };

  constructor() {}

  ngOnInit(): void {}
}

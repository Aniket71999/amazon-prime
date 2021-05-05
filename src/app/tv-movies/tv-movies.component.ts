import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-movies',
  templateUrl: './tv-movies.component.html',
  styleUrls: ['./tv-movies.component.scss'],
})
export class TvMoviesComponent implements OnInit {
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

import { Component, Input } from '@angular/core';

import { MAX_STARS_ARRAY } from './../../constants/star.const';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss'],
})
export class StarRateComponent {
  @Input() count = 0;
  @Input() rate = 0;
  maxStarsArray = MAX_STARS_ARRAY;
}

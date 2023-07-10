import {  
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation, } from '@angular/core';
  import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback-star',
  templateUrl: './feedback-star.component.html',
  styleUrls: ['./feedback-star.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FeedbackStarComponent {
  @Input('rating') rating: number = 0;
  @Input('starCount') starCount: number = 5;
  @Input('color') color: string = 'yellow';
  @Input('disabled') disabled: boolean = false;
  @Output() ratingUpdated = new EventEmitter();

 snackBarDuration: number = 2000;
 ratingArr :any= [];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {  
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
   
      this.ratingUpdated.emit(rating);
      return false;

  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}

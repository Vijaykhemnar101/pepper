import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SideNavService} from '../side-nav.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {
  rating:number = 0;
  starCount:number = 5;
  starColor:any = 'yellow';
  feedback:any='';

  constructor(private SideNavservice:SideNavService, private router:Router){

  }
  onSubmit(form:NgForm){

  
    const fullDate = new Date();
    const formattedDate = fullDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    var record = {
      user : 'vijay' || sessionStorage.getItem('username'),
      feedback : form.value.feedback_message,
      rating : this.rating,
      date : formattedDate
    }

    this.SideNavservice.setFeedback(record);
    this.router.navigate(['home/feedback'])
    
  }

  onRatingChanged(rating:any){
    this.rating = rating;
  }
}

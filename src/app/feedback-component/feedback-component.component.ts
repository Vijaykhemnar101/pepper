import { Component, OnInit } from '@angular/core';
import {SideNavService} from '../side-nav.service'


@Component({
  selector: 'app-feedback-component',
  templateUrl: './feedback-component.component.html',
  styleUrls: ['./feedback-component.component.css']
})
export class FeedbackComponentComponent implements OnInit {
  
  
  username="vijay!"
  feedbacks :any= []

  constructor(private SideNavservice:SideNavService) { }

  ngOnInit(): void {
    this.feedbacks=this.SideNavservice.getFeedback()
  }




}

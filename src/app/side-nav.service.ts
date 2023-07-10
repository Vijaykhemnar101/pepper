import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Feedback {
  user: string;
  feedback: string;
  rating: number;
  date:string;
}

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  
  private feedbackList:Feedback[]=[
  {user:'vijay', feedback:'it very goo jsnd sjd sdjs djs djs djs djs djs djs jd sjd js djs djs dj sj djs djs d sjd sj djs djs dj sj djs djs', rating:5,date:'24/06/2023'},
  {user:'vijay', feedback:'ddddddddddddddddddddddd errrrrrrrrrrrrrrrrrrrrrrr e eeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeee', rating:2,date:'24/06/2023'},
  {user:'vijay', feedback:'it very goo jsnd sjd sdjs djs djs djs djs djs djs jd sjd js djs djs dj sj djs djs d sjd sj djs djs dj sj djs djs', rating:4,date:'09/07/2023'},
  {user:'vijay', feedback:'it very goo jsnd sjd sdjs djs djs djs djs djs djs jd sjd js djs djs dj sj djs djs d sjd sj djs djs dj sj djs djs', rating:1,date:'09/07/2023'}
]
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { } 
 

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  } 

  public getFeedback(){
    return this.feedbackList;
  }

  public setFeedback(feedback:Feedback){
    return this.feedbackList.unshift(feedback);
  }
}

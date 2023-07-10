import { Component, ViewChild } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  @ViewChild('sidenav') public sidenav:any;

  isSelected=true
 
  constructor(private sideNavService: SideNavService) { 
  }

  ngOnInit() { 

   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav?.toggle();
    });
  }
}

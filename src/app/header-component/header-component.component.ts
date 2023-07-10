import { Component } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  // @ViewChild('sidenav') public sidenav: MatSidenav;    

  constructor(private sideNavService: SideNavService, private router:Router) {

  }

  clickMenu() { 
    this.sideNavService.toggle();
  }

  logout(){
    sessionStorage.removeItem('username')
    this.router.navigate(['login'])
  }

}

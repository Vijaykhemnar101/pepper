import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { SideNavService } from './side-nav.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProfileDirective } from './profile.directive';
import { FeedbackComponentComponent } from './feedback-component/feedback-component.component';
import { FeedbackStarComponent } from './feedback-star/feedback-star.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard'

const routes:Routes=[
  { path:'', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path: 'home', component: HomeComponentComponent, children:[
    { path:'feedback', component:FeedbackComponentComponent, canActivate:[AuthGuard]},
    { path: 'feedbackform', component: FeedbackformComponent, canActivate:[AuthGuard] },

  ] },
  { path:'**', redirectTo: 'login'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    ProfileDirective,
    FeedbackComponentComponent,
    FeedbackStarComponent,
    FeedbackformComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatFormFieldModule
    
  ],
  providers: [SideNavService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

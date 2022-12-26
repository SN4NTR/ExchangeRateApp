import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from './authentication.guard';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {ConversionHistoryComponent} from "./conversion-history/conversion-history.component";

const routes: Routes = [
  {
    path: '', canActivate: [AuthenticationGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'conversions-history', component: ConversionHistoryComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

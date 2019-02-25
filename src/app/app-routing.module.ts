import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {InputComponent} from './input/input.component';
import {MasterComponent} from './master/master.component';
import {PipesComponent} from './pipes/pipes.component';
import {AuthGuard} from './auth.guard';
import {PostsComponent} from './posts/posts.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'pipe', component: PipesComponent, canActivate: [AuthGuard]},
  {
    path: '', component: MasterComponent, children: [
      {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'about', component: AboutComponent},
      {path: 'input', component: InputComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false, // <-- debugging purposes only
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

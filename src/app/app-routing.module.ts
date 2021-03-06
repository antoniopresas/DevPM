import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'portafolio', component: PortafolioComponent},
  {path: 'sobre-nosotros', component: AboutComponent},
  {path: 'buscar/:termino', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo:'portafolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

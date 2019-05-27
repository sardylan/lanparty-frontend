import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FastScoresComponent} from './fast-scores/fast-scores.component';
import {FastMapsComponent} from './fast-maps/fast-maps.component';

const routes: Routes = [
  {path: 'scores', component: FastScoresComponent},
  {path: 'maps', component: FastMapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

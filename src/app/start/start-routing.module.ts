import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: 'start',
    component: StartPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}

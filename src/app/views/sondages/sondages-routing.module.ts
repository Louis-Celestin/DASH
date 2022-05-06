import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutSondageComponent } from './ajout-sondage/ajout-sondage.component';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';
import { MesSondagesComponent } from './mes-sondages/mes-sondages.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sondages'
    },
    children: [
      {
        path: '',
        redirectTo: 'ajout-sondage'
      },
      {
        path: 'ajout-sondage',
        component: AjoutSondageComponent,
        data: {
          title: 'ajout de sondage'
        }
      },
      {
        path: '',
        redirectTo: 'liste-sondages'
      },
      {
        path: 'mes-sondages',
        component: MesSondagesComponent,
        data: {
          title: 'Mes sondages'
        }
      },
      {
        path: 'liste-sondages',
        component: ListeSondagesComponent,
        data: {
          title: 'Liste des sondages'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SondagesRoutingModule { }

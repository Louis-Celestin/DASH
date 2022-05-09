import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { SondagesRoutingModule } from './sondages-routing.module';
import { AjoutSondageComponent } from './ajout-sondage/ajout-sondage.component';
import { IconModule } from '@coreui/icons-angular';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';
import { MesSondagesComponent } from './mes-sondages/mes-sondages.component';

@NgModule({
  declarations: [
    AjoutSondageComponent,
    ListeSondagesComponent,
    MesSondagesComponent
  ],
  imports: [
    CommonModule,
    SondagesRoutingModule,
    ReactiveFormsModule,
    DocsComponentsModule
  ]
})
export class SondagesModule { }

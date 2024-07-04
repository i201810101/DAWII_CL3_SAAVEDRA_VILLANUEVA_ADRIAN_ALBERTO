import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Pregunta2Component } from './dashboard/pregunta2/pregunta2.component';
import { Pregunta1Component } from './dashboard/pregunta1/pregunta1.component';


export const routes: Routes = [
    /*{path: "amaterial", component: EjemploAmaterialComponent}*/
    {path: "dashboard", component: DashboardComponent,
        children: [
            {path: "pregunta1", component: Pregunta1Component},
            {path: "pregunta2", component: Pregunta2Component}
        ]
    },
    /*siempre poner el login en primer lugar, el orden importa */
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
  
   
];

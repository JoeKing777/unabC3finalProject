import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionMatriculaComponent } from './gestion-matricula/gestion-matricula.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { GestionMatriculaActualizarComponent } from './gestion-matricula-actualizar/gestion-matricula-actualizar.component';
import { GestionMatriculasConsultarComponent } from './gestion-matriculas-consultar/gestion-matriculas-consultar.component';
import { GestionMatriculasEliminarComponent } from './gestion-matriculas-eliminar/gestion-matriculas-eliminar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { GestionarActualizarIComponent } from './gestionar-actualizar-i/gestionar-actualizar-i.component';
import{     GestionBorrarComponent} from './gestion-borrar/gestion-borrar.component';
import { CambiarComponent } from './cambiar/cambiar.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { GestionarUsuarioComponent } from './gestionar-usuario/gestionar-usuario.component';
import { GestionarCalificacionesComponent } from './gestionar_calificaciones/gestionar-calificaciones.component';
import { GestionReportesComponent } from './gestion-reportes/gestion-reportes.component';
import { ListadecursosComponent } from './listadecursos/listadecursos.component';
import { BoletinesComponent } from './boletines/boletines.component';
import { PerfilComponent } from './perfil/perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    GestionMatriculaComponent,
    EncabezadoComponent,
    GestionMatriculaActualizarComponent,
    GestionMatriculasConsultarComponent,
    GestionMatriculasEliminarComponent,
    PaginaPrincipalComponent,
    RecoveryComponent,
    GestionarActualizarIComponent,
    GestionBorrarComponent,
    CambiarComponent,
    EditarPerfilComponent,
    NuevoUsuarioComponent,
    GestionarUsuarioComponent,
    GestionarCalificacionesComponent,
    GestionReportesComponent,
    ListadecursosComponent,
    BoletinesComponent,
    PerfilComponent
    

    


    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

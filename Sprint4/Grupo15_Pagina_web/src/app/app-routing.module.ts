import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletinesComponent } from './boletines/boletines.component';
import { CambiarComponent } from './cambiar/cambiar.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { GestionBorrarComponent } from './gestion-borrar/gestion-borrar.component';
import { GestionMatriculaActualizarComponent } from './gestion-matricula-actualizar/gestion-matricula-actualizar.component';
import { GestionMatriculaComponent } from './gestion-matricula/gestion-matricula.component';
import { GestionMatriculasConsultarComponent } from './gestion-matriculas-consultar/gestion-matriculas-consultar.component';
import { GestionMatriculasEliminarComponent } from './gestion-matriculas-eliminar/gestion-matriculas-eliminar.component';
import { GestionReportesComponent } from './gestion-reportes/gestion-reportes.component';
import { GestionarActualizarIComponent } from './gestionar-actualizar-i/gestionar-actualizar-i.component';
import { GestionarUsuarioComponent } from './gestionar-usuario/gestionar-usuario.component';
import { GestionarCalificacionesComponent } from './gestionar_calificaciones/gestionar-calificaciones.component';
import { ListadecursosComponent } from './listadecursos/listadecursos.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecoveryComponent } from './recovery/recovery.component';


const routes: Routes = [

  {

    path: "gestion-matricula" , component: GestionMatriculaComponent,
     
  },
{
    path: "gestion-consultas" , component: GestionMatriculasConsultarComponent,
  
  },

  {

    path: "gestion-actualizar", component: GestionMatriculaActualizarComponent
  },

  {

    path: "gestion-eliminar", component: GestionMatriculasEliminarComponent
  },


{
  path: "pagina_principal", component: PaginaPrincipalComponent
},
{
path: "borrar_usuario", component:GestionBorrarComponent

},

{

  path: "cambiar_usuario", component: CambiarComponent
},



{

  path: "actualizar_usuario", component:GestionarActualizarIComponent
},

{
path: "Editar_perfil", component: EditarPerfilComponent

},

{
  
path: "nuevo_usuario", component: NuevoUsuarioComponent

},

{

  path:"login", component: GestionarUsuarioComponent
},



{
path:"recovery", component: RecoveryComponent

},

{

path: "gestionar_calificaciones", component: GestionarCalificacionesComponent
},

{

  path: "gestion_reporte", component: GestionReportesComponent
},

{

  path:"listar_cursos", component: ListadecursosComponent
},

{

  path:"boletines", component: BoletinesComponent
},

{

  path:"perfil", component: PerfilComponent
},

{

  path:"**" , pathMatch:"full", redirectTo: "pagina_principal"


}, 









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

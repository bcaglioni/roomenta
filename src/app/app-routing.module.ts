// DEPENDENCIES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECURITY
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* START MY VIEWS */

    { path: 'aulas/:id', loadChildren: './pages/aula-edit/aula-edit.module#AulaEditModule', canActivate: [AuthGuard] },
    { path: 'aulas', loadChildren: './pages/aula-list/aula-list.module#AulaListModule', canActivate: [AuthGuard] },
    { path: '', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: 'rooms/:id', loadChildren: './pages/room-edit/room-edit.module#RoomEditModule', canActivate: [AuthGuard] },
    { path: 'rooms', loadChildren: './pages/room-list/room-list.module#RoomListModule', canActivate: [AuthGuard] },
    { path: 'sedes/:id', loadChildren: './pages/sede-edit/sede-edit.module#SedeEditModule', canActivate: [AuthGuard] },
    { path: 'sedes', loadChildren: './pages/sede-list/sede-list.module#SedeListModule', canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloPagesModule } from './modulo-pages.module';

const routes: Routes = [
  {
    path: '',
    component: ModuloPagesModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloPagesRoutingModule { }

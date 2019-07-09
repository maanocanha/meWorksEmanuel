import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
  { 
    path: 'cadastro', 
    component: IndexComponent 
  },
  { 
    path: 'cadastro/save', 
    component: SaveComponent 
  },
  { 
    path: 'cadastro/save/:id', 
    component: SaveComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }

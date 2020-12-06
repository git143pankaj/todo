import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddworkComponent } from './component/addwork/addwork.component';
import { EditworkComponent } from './component/editwork/editwork.component';
import { WorklistComponent } from './component/worklist/worklist.component';


const routes: Routes = [
  { path: '', redirectTo: 'worklist', pathMatch: 'full' },
  { path: 'worklist', component: WorklistComponent },
  { path: 'addwork', component: AddworkComponent },
  { path: 'editwork/:id', component: EditworkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

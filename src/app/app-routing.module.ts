import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Taskmanagement } from './taskmanagement/taskmanagement.component';

const routes: Routes = [{ path: '', component: Taskmanagement }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

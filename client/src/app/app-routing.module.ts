import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path:'', component:AppComponent},
  {path: "client", component: ClientComponent},
  {path: "scheduling", component: SchedulingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

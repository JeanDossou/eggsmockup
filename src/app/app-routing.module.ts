import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { HomeComponent } from './home/home.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ListLivraisonComponent } from './list-livraison/list-livraison.component';
import { DetailLivraisonComponent } from './detail-livraison/detail-livraison.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DoCommandComponent } from './do-command/do-command.component';
import { PanierComponent } from './panier/panier.component';
import { ValidationBonComponent } from './validation-bon/validation-bon.component';
import { CustomerCmdComponent } from './customer-cmd/customer-cmd.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'list-commande', component: ListCommandeComponent},
  { path: 'detail-commande', component: DetailCommandeComponent},
  { path: 'list-livraison', component: ListLivraisonComponent},
  { path: 'detail-livraison', component: DetailLivraisonComponent},
  { path: 'livraison', component: LivraisonComponent},
  {path :"addproduct", component: AddProductComponent},

  {path:"web.index", component: DoCommandComponent},
  {path:"addcart", component: PanierComponent},
  {path:"commande/client", component: CustomerCmdComponent},
  {path:"valid-bon", component: ValidationBonComponent},
  { path: '',   redirectTo: '/web.index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CommandeComponent } from './commande/commande.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { HomeComponent } from './home/home.component';
import { DetailLivraisonComponent } from './detail-livraison/detail-livraison.component';
import { PointJournalierComponent } from './point-journalier/point-journalier.component';
import { ListLivraisonComponent } from './list-livraison/list-livraison.component';

import { DataTablesModule } from 'angular-datatables';
import { AddProductComponent } from './add-product/add-product.component';
import { DoCommandComponent } from './do-command/do-command.component';
import { DetailCommandComponent } from './detail-command/detail-command.component';
import { ValidationBonComponent } from './validation-bon/validation-bon.component';
import { PanierComponent } from './panier/panier.component';
import { CustomerCmdComponent } from './customer-cmd/customer-cmd.component';
import { SmsService } from './sms.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CommandeComponent,
    LivraisonComponent,
    DetailCommandeComponent,
    ListCommandeComponent,
    HomeComponent,
    DetailLivraisonComponent,
    PointJournalierComponent,
    ListLivraisonComponent,
    AddProductComponent,
    DoCommandComponent,
    DetailCommandComponent,
    ValidationBonComponent,
    PanierComponent,
    CustomerCmdComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,FormsModule
  ],
  providers: [SmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

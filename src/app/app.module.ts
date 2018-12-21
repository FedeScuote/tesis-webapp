import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from '../material/material.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ThesisNavComponent } from './thesis-nav/thesis-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatInputModule
} from '@angular/material';
import {AppRoutingModule} from './routes/app-routing.module';
import { ROUTES } from './app.routes';
import { UsersModule } from './users/users.module';
import { ApiModule } from './api/api.module';
import { OrganizationModule } from './organizations/organizations.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { OfferServiceModule } from './offer-service/offer-service.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ThesisNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    RouterModule.forRoot(ROUTES),
    UsersModule,
    OrganizationModule,
    ApiModule,
    ReceiptsModule,
    OfferServiceModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

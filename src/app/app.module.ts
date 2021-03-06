import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArrendatariosComponent } from './users/arrendatarios/pages/arrendatarios/arrendatarios.component';
import { ArrendadoresComponent } from './users/arrendadores/pages/arrendadores/arrendadores.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AccountComponent } from './users/arrendatarios/pages/account/account.component';
import { ConfigurationComponent } from './users/arrendatarios/pages/configuration/configuration.component';
import { MessageComponent } from './users/arrendatarios/pages/message/message.component';
import { PoliticAndPrivacyComponent } from './users/arrendatarios/pages/politic-and-privacy/politic-and-privacy.component';
import { ProfileComponent } from './users/arrendatarios/pages/profile/profile.component';
import { ReservasComponent } from './users/arrendatarios/pages/reservas/reservas.component';
import { HomeComponent } from './users/arrendatarios/pages/home/home.component';
import { CarsComponent } from './users/arrendadores/pages/cars/cars.component';

import { HomeAComponent } from './users/arrendadores/pages/home-a/home-a.component';
import { MessageAComponent } from './users/arrendadores/pages/message-a/message-a.component';
import { ConfigurationAComponent } from './users/arrendadores/pages/configuration-a/configuration-a.component';
import { ProfileAComponent } from './users/arrendadores/pages/profile-a/profile-a.component';
import { ReservationsAComponent } from './users/arrendadores/pages/reservations-a/reservations-a.component';
import { PoliticAndPrivacyAComponent } from './users/arrendadores/pages/politic-and-privacy-a/politic-and-privacy-a.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrendatariosComponent,
    ArrendadoresComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ConfigurationComponent,
    MessageComponent,
    PoliticAndPrivacyComponent,
    ProfileComponent,
    ReservasComponent,
    HomeComponent,
    CarsComponent,

    HomeAComponent,
    MessageAComponent,
    ConfigurationAComponent,
    ProfileAComponent,
    ReservationsAComponent,
    PoliticAndPrivacyAComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

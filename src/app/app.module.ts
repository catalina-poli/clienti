import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ChangeDetectionStrategy } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { clientiComponent } from './clienti/clienti.component';
import { SetariComponent } from './setari/setari.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    clientiComponent,
    SetariComponent,
    UsersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule, 
    MatTableModule ,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,  
    MatTooltipModule,   
    DateComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

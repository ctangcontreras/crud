import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router';


import { MatMenuModule } from '@angular/material/menu';

import { A11yModule } from '@angular/cdk/a11y';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalProductoComponent } from './pages/modal-producto/modal-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalSucursalComponent } from './pages/modal-sucursal/modal-sucursal.component';
import { ModalUsuarioComponent } from './pages/modal-usuario/modal-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    ModalProductoComponent,
    ModalSucursalComponent,
    ModalUsuarioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,

    HttpClientModule,


    CommonModule,


    A11yModule,
    MatTableModule,
    FlexLayoutModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    MatDialogModule, MatButtonModule, MatIconModule,


    MatFormFieldModule,
    MatInputModule, MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalProductoComponent, ModalSucursalComponent, ModalUsuarioComponent]

})
export class AppModule { }
